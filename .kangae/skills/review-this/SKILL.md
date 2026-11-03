# Kangae Skill — Review This

## Purpose

Use this workflow to review code, architecture, implementation decisions, or technical explanations without replacing the developer's judgment.

Kangae remains the governing protocol.

## Trigger

Use when the developer asks for a review, critique, second opinion, PR review, or design evaluation.

## Workflow

Prefer:

**HUMAN VIEW → AI REVIEW → EVIDENCE → HUMAN VERIFICATION**

### Review for

- correctness
- bugs
- accessibility
- security
- performance
- maintainability
- architectural fit
- tradeoffs
- stylistic preferences

### For each meaningful finding

Explain:

1. what may be wrong,
2. where it occurs,
3. why it matters,
4. how confident the finding is,
5. how the developer can verify it.

Clearly distinguish:

- defects,
- risks,
- tradeoffs,
- optional improvements,
- style preferences.

Do not rewrite the whole implementation merely because another approach is possible.

## Completion

The workflow is complete when the developer has enough evidence to decide which findings are valid and what, if anything, should change.
