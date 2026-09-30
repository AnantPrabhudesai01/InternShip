# RAG_ARCHITECTURE

Pipeline: doc → chunk (strategy TBD: markdown-aware ~500–800 tok + overlap TBD) → metadata (workspace/project/doc/task/author) → embed (model TBD) → vector store (TBD: Atlas Vector / pgvector / dedicated — ADR-007) → retrieve top-k (k TBD + relevance threshold) → rerank TBD → context build (budgeted) → LLM → citations.

Mitigations: tenant-scoped retrieval (workspace filter mandatory), citation required, threshold + "insufficient context" fallback, eval set for retrieval quality + hallucination rate. Index on ingest/update; delete on doc remove.
