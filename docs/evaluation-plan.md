# Evaluation plan

The planned research agent needs separate measures for grounding quality, report usefulness and operational efficiency. The current prototype has not yet been evaluated against this plan.

## Metrics

- **Citation precision:** proportion of citations that support the associated claim.
- **Citation recall:** proportion of verifiable report claims that include an appropriate citation.
- **Unsupported claim rate:** proportion of report claims not entailed by retrieved evidence.
- **Duplicated evidence rate:** proportion of retained evidence that duplicates another source or item.
- **Report latency:** end-to-end time from submitted topic to completed report, with stage timings where possible.
- **Tokens per report:** input and output tokens used by each model stage and in total.
- **Cache hit rate:** proportion of eligible retrieval or processing requests served from cache.
- **Model routing accuracy:** proportion of routing decisions that select the expected model under a defined quality/latency policy.
- **Human quality rating:** reviewer assessment of usefulness, coverage, clarity and faithfulness to evidence.

Extraction accuracy and theme quality should also be measured on annotated subsets. Extraction can use precision, recall and field-level accuracy; theme quality can combine human coherence, distinctness and evidence-coverage ratings.

## Evaluation method

1. Create 20–50 fixed research topics spanning products, services and domains with different source availability.
2. Manually inspect retrieved sources and annotate claims, evidence spans and themes for a small gold set.
3. Compare a one-model pipeline with the routed pipeline using the same topics and retrieved evidence.
4. Compare uncached and cached runs while controlling for topic, source set and pipeline version.
5. Track report quality, latency and token usage for every run.

## Experimental controls

Record the topic-set version, query plan, retrieval provider, retrieval timestamp, source snapshot or identifiers, prompt versions, model names, model settings and cache state. Reuse the same retrieved source set when isolating model or routing changes.

## Reporting

Publish aggregate results alongside failure examples. Report means and variability rather than only best runs, separate automated scores from human ratings, and state which pipeline components were implemented at evaluation time.
