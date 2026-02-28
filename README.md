# Sift AI

**Feedback intelligence, instantly.**

Sift AI scours the internet for real user feedback on any topic — surfacing what people like, dislike, what's missing, and what trends are emerging. Built for entrepreneurs, product builders, and researchers who want to understand what people really think.

![Sift AI](https://img.shields.io/badge/status-active-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue) ![Vite](https://img.shields.io/badge/vite-5.x-purple) ![React](https://img.shields.io/badge/react-18.x-blue)

---

## Features

- 🔍 **Topic search** — enter any product, service, app, or concept
- 👍 **Likes** — what people genuinely appreciate
- 👎 **Dislikes** — recurring frustrations and complaints
- 💡 **Missing** — gaps and unmet needs (opportunity scores included)
- 📈 **Trends** — emerging patterns in feedback
- 🤖 **Ollama powered** — runs 100% locally, no API costs, no data leaves your machine
- 💾 **JSON export** — download full results for further analysis

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
git clone https://github.com/YOUR_USERNAME/SiftAI.git
cd SiftAI
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
├── LICENSE
└── README.md
```

---

## Changing the Model

Select your preferred model from the dropdown in the top right corner of the app. Make sure you have pulled the model first with `ollama pull <model-name>`.

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)
