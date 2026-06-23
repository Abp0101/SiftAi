# Roadmap

## Phase 1 — Make the current prototype explicit

- [x] Local Ollama integration
- [x] Structured feedback categories
- [x] Manual model selection
- [x] JSON export
- [ ] Replace synthetic source-count language in the application UI and prompt
- [ ] Add schema validation and clearer model-error reporting

## Phase 2 — Grounded retrieval

- [ ] Add a query planner for decomposing research topics
- [ ] Integrate a real search/retrieval provider
- [ ] Collect and normalise source documents with provenance
- [ ] Extract evidence with source-span references
- [ ] Deduplicate URLs, syndicated pages and repeated evidence

## Phase 3 — Research synthesis

- [ ] Cluster evidence into recurring themes
- [ ] Add a critic/verifier for claim-to-evidence checks
- [ ] Generate reports with verified source citations
- [ ] Extend JSON export with evidence and provenance records

## Phase 4 — Reliability and optimisation

- [ ] Cache retrieval, extraction and report artifacts
- [ ] Route pipeline stages across suitable local or configured models
- [ ] Log latency and token usage by stage
- [ ] Build the fixed-topic evaluation suite
- [ ] Compare quality, latency and token usage across pipeline variants

Roadmap items describe intended work, not current capabilities. New research features should be described as implemented only after their source provenance and evaluation behavior can be demonstrated.
