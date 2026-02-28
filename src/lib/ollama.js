/**
 * siftai/src/lib/ollama.js
 * Handles all communication with the local Ollama instance.
 * Ollama must be running: `ollama serve`
 * Recommended models: llama3.2, mistral, deepseek-r1
 */

const OLLAMA_BASE = '/ollama'; // proxied via vite to http://localhost:11434

export async function queryOllama(topic, model = 'llama3.2') {
  const prompt = `You are a feedback intelligence AI. Analyse the topic: "${topic}".

Search your knowledge for real user feedback, reviews, forum posts, and discussions about this topic.

Return ONLY a valid JSON object (no markdown, no backticks, no explanation) in this exact format:
{
  "topic": "${topic}",
  "summary": "2-3 sentence overview of the overall sentiment and landscape",
  "sentiment_score": <number -10 to 10, where -10 is very negative and 10 is very positive>,
  "total_sources": <estimated number of sources analysed, between 500-5000>,
  "likes": [
    { "title": "short title", "detail": "1-2 sentence explanation", "frequency": "High|Medium|Low" }
  ],
  "dislikes": [
    { "title": "short title", "detail": "1-2 sentence explanation", "frequency": "High|Medium|Low" }
  ],
  "missing": [
    { "title": "short title", "detail": "1-2 sentence explanation", "opportunity_score": <1-10> }
  ],
  "trends": [
    { "title": "short title", "detail": "1-2 sentence explanation" }
  ]
}

Include exactly 4 items in each array. Be specific, realistic, and grounded in real user feedback patterns.`;

  const response = await fetch(`${OLLAMA_BASE}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      prompt,
      stream: false,
      options: {
        temperature: 0.7,
        top_p: 0.9,
      }
    })
  });

  if (!response.ok) {
    throw new Error(`Ollama error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const text = data.response || '';

  // Robustly extract JSON even if model adds surrounding text
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('No valid JSON returned from model');

  return JSON.parse(jsonMatch[0]);
}

export async function getAvailableModels() {
  try {
    const response = await fetch(`${OLLAMA_BASE}/api/tags`);
    const data = await response.json();
    return data.models?.map(m => m.name) || [];
  } catch {
    return [];
  }
}
