# Sift AI

**Feedback intelligence, instantly.**

Sift AI is a local-first feedback intelligence prototype that uses LLMs to organise product feedback into likes, dislikes, missing features and emerging trends. The roadmap extends it into a grounded research agent with real source retrieval, citations and claim verification.

![Sift AI](https://img.shields.io/badge/status-active_prototype-orange) ![License](https://img.shields.io/badge/license-MIT-blue) ![Vite](https://img.shields.io/badge/vite-5.x-purple) ![React](https://img.shields.io/badge/react-18.x-blue)

---

## Current status

Sift AI is an active prototype. The current version sends feedback-style topic prompts to a selected local Ollama model, parses the model's structured JSON response, presents likes, dislikes, missing features and trends, and supports JSON export.

It does **not** currently search the internet, retrieve source documents or produce verified citations. Current outputs are generated from the selected model's existing knowledge and may contain unsupported claims. The planned version will add real source retrieval, citations, claim verification, caching and task-aware model routing.

## Product vision

Sift AI is designed to become a grounded customer-research agent for founders, product builders and researchers. The goal is to move beyond generic LLM summaries by retrieving real source material, extracting evidence, grouping recurring themes and producing cited reports with clear limitations.

## Planned research-agent pipeline

The intended architecture is planned work and is not implemented by the current prototype:

```text
User topic
→ query planning
→ source retrieval
→ evidence extraction
→ deduplication
→ theme clustering
→ claim verification
→ cited report generation
→ JSON export
```

This pipeline would separate evidence collection from synthesis, retain source provenance through each stage and require claims to be checked against retrieved text before they appear in a report.

## Evaluation and optimisation roadmap

The research-agent version will be evaluated using:

- citation correctness
- unsupported-claim rate
- duplicate-source rate
- theme quality
- extraction accuracy
- latency per report
- tokens used
- cache hit rate
- quality/latency trade-off across models

The [evaluation plan](docs/evaluation-plan.md) defines a fixed-topic benchmark and comparisons for caching and model routing.

## Current prototype capabilities

- 🔍 **Topic analysis** — submit a product, service, app or concept to a local model
- 👍 **Likes** — what people genuinely appreciate
- 👎 **Dislikes** — recurring frustrations and complaints
- 💡 **Missing** — gaps and unmet needs (opportunity scores included)
- 📈 **Trends** — emerging patterns in feedback
- 🤖 **Ollama powered** — uses a local Ollama endpoint by default
- 💾 **JSON export** — download full results for further analysis

These categories are model-generated in the current version; they are not yet grounded in retrieved feedback records.

## Documentation

- [Architecture](docs/architecture.md) — current implementation and planned research-agent design
- [Roadmap](docs/roadmap.md) — staged implementation plan
- [Evaluation plan](docs/evaluation-plan.md) — proposed quality, grounding and efficiency metrics
- [Limitations](docs/limitations.md) — current evidence and product boundaries
- [Decision log](docs/decision-log.md) — initial technical decisions and rationale

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | CSS Modules |
| LLM | Ollama (local) |
| Models | llama3.2, mistral, deepseek-r1, gemma2 |

---

## Getting Started

### 1. Install Ollama

Download and install from [ollama.com](https://ollama.com) — it's free and runs locally.

### 2. Pull a model

```bash
ollama pull llama3.2
```

> Other recommended models: `mistral`, `deepseek-r1`, `gemma2`

### 3. Start Ollama

```bash
ollama serve
```

### 4. Clone and run Sift AI

```bash
git clone https://github.com/Abp0101/SiftAi.git
cd SiftAi
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
SiftAI/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── ResultsDashboard.jsx
│   │   └── EmptyState.jsx
│   ├── lib/
│   │   └── ollama.js        ← Ollama API integration
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── docs/
├── LICENSE
└── README.md
```

---

## Changing the Model

Select your preferred model from the dropdown in the top right corner of the app. Make sure you have pulled the model first with `ollama pull <model-name>`.

Model selection is currently manual. Automatic routing by task, quality, latency or cost is roadmap work.

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)
