# Stage 04 — Test

## Purpose

Use evidence to validate or falsify a hypothesis, attempt, or assumption.

## Reads

- relevant hypotheses from `../02_think/output/hypotheses.md`
- relevant attempt from `../03_attempt/output/attempt.md`
- code, tests, logs, DevTools output, runtime behavior, documentation, or reproductions
- `KANGAE.md`

## Responsibilities

Prefer:

**OBSERVE → PREDICT → TEST → INTERPRET**

Capture:

- what is being tested
- expected result
- actual result
- evidence source
- what the result supports
- what the result rules out
- remaining uncertainty

Kangae applies here: ask for a prediction when it adds learning value, and let the developer interpret evidence before taking over when practical.

Do not treat AI speculation as evidence.

## Produces

`output/evidence.md`

## Checkpoint

Before routing onward, the result should change the state of knowledge.

A useful test should make at least one hypothesis more likely, less likely, confirmed, or rejected.

If the result is ambiguous, identify the next discriminating test instead of pretending the issue is resolved.

## Routes to

Usually:

- `03_attempt` when evidence supports a change
- `02_think` when evidence requires a new hypothesis
- `05_review` when the solution is now validated
- `01_understand` when evidence reveals the original problem framing was wrong
