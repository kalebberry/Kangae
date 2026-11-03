# Stage 03 — Attempt

## Purpose

Create or capture the next meaningful implementation, change, experiment, or solution attempt.

## Reads

- relevant outputs from Understand, Think, or Test
- relevant code and files
- `KANGAE.md`
- applicable skill instructions

## Responsibilities

Capture:

- the proposed change
- why this attempt is reasonable
- assumptions it depends on
- expected result

Kangae determines who should drive the attempt.

When the task has learning value, prefer a developer-authored attempt with AI support.

When delegation is appropriate or explicitly requested, AI may implement while still explaining significant decisions and preserving ownership.

## Produces

`output/attempt.md`

For code-changing work, this artifact may summarize the implementation rather than duplicate the entire patch.

## Checkpoint

Before routing onward:

- the attempt should be specific enough to evaluate,
- its expected effect should be clear,
- and the developer should understand the meaningful decision being tested or shipped.

## Routes to

Usually:

- `04_test` to gather evidence
- `05_review` when evaluation can happen directly
- `02_think` when the attempt exposes a flawed assumption
