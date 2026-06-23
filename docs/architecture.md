# Sift AI architecture

Sift AI is being developed in two stages: a local feedback-structuring prototype and a planned grounded research agent. This separation makes the current evidence boundary explicit and provides a concrete path toward retrieval-augmented generation.

## Stage 1 — Current prototype

```text
User topic
→ React/Vite interface
→ prompt sent to local Ollama model
→ model-generated JSON
→ feedback category dashboard
→ JSON export
```

### React/Vite frontend

The React interface accepts a topic, allows the user to select an Ollama model and renders the returned analysis. Vite provides the development server and proxies `/ollama` requests to the local Ollama endpoint.

### Local Ollama model integration

The client sends one prompt to Ollama's generate endpoint. The prompt requests a JSON object containing a summary, sentiment score, likes, dislikes, missing features and trends. The client extracts the first JSON object from the response and parses it for display.

### Feedback categorisation

The model generates four items for each feedback category. These categories are inferred from model knowledge; the current implementation does not retrieve feedback records, preserve source provenance or verify whether the output reflects current customer discussions.

### JSON export

The displayed result can be downloaded as JSON. This export contains the model-generated analysis, not retrieved evidence or verified citations.

## Stage 2 — Planned research-agent architecture

```text
User topic
→ query planner
→ search/retrieval layer
→ source collector
→ evidence extractor
→ deduplication
→ theme clustering
→ critic/verifier
→ cited report generator
→ JSON export
        ↕
cache and model router
```

### Search and retrieval layer

Translate the research topic into focused queries and retrieve documents through explicit, permitted source connectors. Each result should retain its URL, title, publication time when available and retrieval timestamp.

### Source collector

Fetch and normalise source content while recording provenance, access failures and extraction metadata. Source policies should respect platform terms, robots directives and privacy requirements.

### Evidence extractor

Extract feedback claims, quotations or paraphrased evidence into a structured schema linked to exact source spans. Evidence without a recoverable source reference should not progress to the cited report.

### Deduplication

Detect duplicate URLs, syndicated content and semantically repeated evidence so repeated material does not inflate apparent theme frequency.

### Theme clustering

Group supported evidence into recurring likes, dislikes, unmet needs and trends. Cluster outputs should preserve links back to every contributing evidence item.

### Critic and verifier

Check that each report claim is entailed by its cited evidence, flag contradictions and remove or qualify unsupported synthesis.

### Cited report generator

Produce a readable report and structured JSON with source-level citations, confidence or limitation notes and an explicit distinction between observed evidence and model interpretation.

### Cache and model router

Cache retrieval and extraction artifacts using versioned keys. Route extraction, clustering, verification and synthesis to models selected for each task's quality and latency requirements. Model routing is planned and is currently manual.
