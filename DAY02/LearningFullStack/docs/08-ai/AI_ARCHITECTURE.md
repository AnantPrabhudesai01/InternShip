# AI_ARCHITECTURE

Provider abstraction (`ai/`): `providers/{base,openai,anthropic,...TBD}` + prompt templates + structured-output (JSON schema/Zod) + streaming (SSE) + retries/fallbacks + rate/cost/latency tracking. Model: `UNRESOLVED` (ADR-005).

Features: task generator, project planner, doc generator, thread summarizer, issue assistant, semantic search, RAG assistant, tool-calling, gated agent. Every feature must solve a product job — no demo chatbot.

Guards: permission check per tool, user confirm for destructive, audit log, prompt-injection + RAG-poisoning mitigations (see SECURITY.md), token caps, refusal for unauthorized ops. Eval: factuality, schema validity, retrieval quality, tool choice, refusal, injection resistance, latency/cost.
