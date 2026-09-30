# TESTING_STRATEGY

Layers: unit (utils/reducers/services/validators/AI parsers) • component (RTL: forms/modals/tables/nav/AI composer + states) • integration (API+auth+DB, AI boundaries mocked) • E2E (Playwright: register→workspace→project→task→sprint→comment→AI) • AI eval (factuality, schema, retrieval, tool choice, refusal, injection, hallucination, latency/cost).

Rules: slice needs tests to be COMPLETE; no invented numbers — report measured pass/coverage/latency. Storybook covers visual states; interaction tests where valuable.
