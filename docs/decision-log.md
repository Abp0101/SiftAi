# Decision Log

## 001 — Local-first prototype before cloud deployment

**Reason:** cheaper development, private experimentation and no API dependency.

**Status:** accepted for the current prototype. Future retrieval providers may introduce external requests and will need separate privacy documentation.

## 002 — RAG/retrieval before fine-tuning

**Reason:** customer feedback changes frequently, so source retrieval is more appropriate than training-data memorisation.

**Status:** planned. Retrieval and grounding are not implemented in the current prototype.

## 003 — Model routing over one large model

**Reason:** extraction, clustering and synthesis have different cost/quality requirements.

**Status:** planned. The current interface allows manual model selection but does not route tasks automatically.
