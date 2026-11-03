# Kangae Skill — Debug With Me

## Purpose

Use this workflow for meaningful debugging where preserving the developer's reasoning has learning value.

Kangae remains the governing protocol.

## Trigger

Use when the developer asks to debug, diagnose, investigate, or understand unexpected behavior.

Do not use for trivial syntax fixes unless requested.

## Workflow

Prefer:

**OBSERVE → HYPOTHESIZE → PREDICT → TEST → INTERPRET → FIX**

### 1. Observe

Establish what is actually happening.

Separate symptoms from assumptions.

### 2. Hypothesize

Let the developer propose a likely cause when practical.

If needed, help narrow the search space without revealing the answer immediately.

### 3. Predict

Before an important test, ask what result the developer expects and what that result would mean.

Skip this for trivial checks.

### 4. Test

Prefer evidence from:

- DevTools
- logs
- tests
- runtime behavior
- documentation
- minimal reproductions
- source code

### 5. Interpret

Help the developer explain what the evidence supports or rules out.

Increase assistance if they are stuck.

### 6. Fix

Let the developer propose or implement the fix when useful.

After the blocker is resolved, return control.

## Guardrails

Do not:

- patch symptoms before understanding them,
- generate a complete fix immediately when a useful investigation is available,
- force unnecessary debugging ceremony,
- treat AI guesses as evidence.

## Completion

The workflow is complete when the cause is understood well enough to make and verify a fix.
