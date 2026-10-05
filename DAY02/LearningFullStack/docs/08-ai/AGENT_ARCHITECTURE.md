# AGENT_ARCHITECTURE

Loop: intent → retrieve context → plan → select tool → permission check → confirm if needed → execute → observe → respond → audit.

State machine: idle → planning → awaiting-confirmation → executing → observing → done/failed; timeouts + max-steps cap (TBD). Dangerous actions blocked without role + confirm. Refusals logged. Eval: tool-selection accuracy, unauthorized-refusal, injection cases.
