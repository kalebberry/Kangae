# Kangae Skill — Reconstruct

## Purpose

Verify that an important idea survived after AI assistance.

This skill addresses the gap between:

> "I recognize the solution."

and:

> "I can reason toward or recreate the important part myself."

Kangae remains the governing protocol.

## Trigger

Use after a meaningful concept or implementation has been solved when AI provided substantial help and verifying transfer would be valuable.

Do not use for:

- boilerplate,
- trivial syntax,
- repetitive work,
- concepts the developer already clearly knows.

## Workflow

Prefer:

**REMOVE SCAFFOLDING → RECREATE → EXPLAIN → VARY → VERIFY**

### 1. Remove scaffolding

Do not repeat the final solution unless needed.

### 2. Recreate

Ask the developer to reproduce one important part from understanding.

This may mean:

- rewriting a small piece of code,
- explaining the solution,
- recreating the debugging logic,
- or describing the decision process.

### 3. Explain

Ask why the reconstructed solution works.

### 4. Vary

When useful, change one constraint and ask what should change.

### 5. Verify

Correct remaining misconceptions.

Use hints progressively if the developer gets stuck.

## Guardrails

Do not turn every completed task into a test.

Use reconstruction selectively where knowledge transfer matters.

## Completion

The workflow is complete when the developer demonstrates usable understanding without relying on the original AI-generated answer.
