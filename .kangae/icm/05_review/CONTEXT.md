# Stage 05 — Review

## Purpose

Evaluate the current reasoning, implementation, and tradeoffs before considering the work complete.

## Reads

- relevant problem, hypotheses, attempt, and evidence artifacts
- current implementation
- requirements or acceptance criteria
- `.kangae/KANGAE.md`
- `.kangae/skills/review-this/SKILL.md` when applicable

## Responsibilities

Review for:

- correctness
- bugs
- accessibility
- security
- performance
- maintainability
- architectural fit
- tradeoffs
- stylistic preferences

Clearly distinguish:

- confirmed defects
- likely risks
- open questions
- tradeoffs
- optional improvements
- style preferences

Kangae applies here: AI is a second reviewer, not the authority. Provide enough evidence for the developer to independently verify meaningful findings.

## Produces

`output/review.md`

## Checkpoint

Before routing onward:

- important findings should be understandable and verifiable,
- unresolved risks should be visible,
- and the developer should be able to decide whether the result is acceptable.

## Routes to

Usually:

- `03_attempt` when changes are needed
- `04_test` when a finding needs verification
- `06_reflect` when the work produced reusable learning
- completion when no further stage adds value
