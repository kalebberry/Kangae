# Kangae ICM Context

Kangae remains the governing behavior layer.

This ICM workspace is the workflow layer: it makes meaningful engineering work visible through small, inspectable stage contracts and artifacts.

## Relationship to Kangae

Use this model:

- **Kangae = HOW the AI collaborates with the developer**
- **ICM = WHAT stage of work is active and what artifact that stage should produce**
- **Skills = reusable workflows that may run inside a stage**

ICM must never override Kangae's ownership, adaptive-assistance, productive-struggle, proof-of-understanding, or return-control rules.

The developer should not have to manage this routing manually. The AI should infer useful stages from the task.

## Stage contract

Each stage defines:

1. **Purpose** — the single job of the stage.
2. **Reads** — the context or artifacts it may consume.
3. **Responsibilities** — what belongs in this stage.
4. **Produces** — the artifact it should create or update.
5. **Checkpoint** — what should be true before routing onward.
6. **Routes to** — likely next stages.

A stage output is a working artifact, not authoritative truth.

The developer may correct, reject, replace, or skip an artifact at any time.

## Stage map

- `01_understand` — establish a shared problem model
- `02_think` — form hypotheses, options, and predictions
- `03_attempt` — capture a proposed change or implementation
- `04_test` — gather evidence and interpret results
- `05_review` — evaluate correctness, quality, and tradeoffs
- `06_reflect` — capture reusable learning when worthwhile

## Routing examples

Debugging commonly uses:

`01_understand → 02_think → 04_test → 03_attempt → 05_review → 06_reflect`

Build work commonly uses:

`01_understand → 02_think → 03_attempt → 04_test → 05_review`

Study work commonly uses:

`01_understand → 02_think → 03_attempt → 05_review → 06_reflect`

Review work commonly uses:

`01_understand → 05_review → 06_reflect`

These are examples, not mandatory pipelines.

Stages may be revisited. For example, new test evidence may route back to Think or Understand.

A trivial task may skip ICM entirely.

## Routing rule

Route based on the next useful artifact, not on stage numbers.

Do not advance merely because a file was written.

Advance when the current stage's checkpoint is satisfied and another stage would add value.

## Human checkpoints

Use human review where judgment, correction, learning, or ownership benefits from it.

Kangae determines how much assistance to provide at those checkpoints.

Do not create ceremony for low-value work.
