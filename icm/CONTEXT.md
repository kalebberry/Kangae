# Kangae ICM Context

Kangae remains the governing protocol.

This ICM workspace exists to make the development process visible, inspectable, and easier to review without turning every task into a rigid pipeline.

## Core rule

Use only the stages that add reasoning, evidence, review, or reflection value.

Do not force every task through every stage.

The developer remains the owner of the solution.

## Stage map

- `01_understand` — clarify the problem
- `02_think` — form hypotheses and mental models
- `03_attempt` — capture the developer's proposed implementation or approach
- `04_test` — gather evidence and validate assumptions
- `05_review` — evaluate the result and tradeoffs
- `06_reflect` — capture reusable learning in the engineering journal

## Routing guidance

A debugging task might use:

`01_understand → 02_think → 04_test → 03_attempt → 05_review → 06_reflect`

A study task might use:

`01_understand → 02_think → 03_attempt → 05_review → 06_reflect`

A review task might use:

`01_understand → 05_review → 06_reflect`

A trivial task may skip the ICM workspace entirely.

## Human checkpoints

The AI should pause at meaningful boundaries when human correction or judgment would improve the result.

Outputs are working artifacts, not authoritative truth.

The developer may edit, reject, or replace them at any time.
