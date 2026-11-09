# Kangae Skill — Understand Code

## Purpose

Help the developer understand unfamiliar code, a single file, a feature flow, or an entire codebase without replacing the work of reading and reasoning.

The goal is not to produce a giant summary.

The goal is to build a usable mental model.

Kangae remains the governing protocol.

## Trigger

Use when the developer asks to:

- understand a codebase,
- understand a project,
- understand a file,
- trace how a feature works,
- learn how data moves through the system,
- identify important entry points,
- understand architecture or module relationships,
- or get oriented in unfamiliar code.

Natural-language requests are enough. The developer should not need to invoke this skill by name.

## Workflow

Prefer:

**ORIENT → TRACE → MAP → EXPLAIN → VERIFY**

### 1. Orient

Identify the smallest useful starting point.

For a codebase, this may include:

- application entry points,
- major folders or modules,
- routing,
- state boundaries,
- API boundaries,
- shared infrastructure,
- build/runtime setup.

For a single file, identify:

- its primary responsibility,
- important inputs,
- outputs,
- dependencies,
- side effects,
- and where it fits in the surrounding system.

Do not dump the entire repository structure unless that is genuinely useful.

### 2. Trace

Follow one real path through the code.

Examples:

- user action → event handler → state update → API call → render,
- route → loader → service → data transformation → component,
- command → domain logic → persistence,
- file import → function call → downstream dependency.

Prefer concrete execution or data flow over abstract summaries.

When practical, let the developer predict what happens next before revealing it.

### 3. Map

Build a lightweight mental model of the relationships that matter.

Capture:

- responsibilities,
- boundaries,
- dependencies,
- important conventions,
- ownership of state or data,
- and where changes would likely belong.

Do not turn the map into exhaustive documentation.

### 4. Explain

Explain the important concepts at the level needed for the current task.

Prefer:

- why this piece exists,
- how it connects,
- what assumptions it depends on,
- what is safe to ignore for now.

Avoid replacing source reading with paraphrase.

Point back to the relevant code so the developer can verify the explanation.

### 5. Verify

Use a light understanding check when the concept matters.

Examples:

- ask the developer to explain the flow back,
- ask what file they would inspect next,
- ask where a change should probably live,
- ask what would happen if one dependency changed.

Do not quiz constantly.

Stop once the developer has a usable mental model.

## Scope adaptation

### Whole codebase

Start broad enough to orient, then quickly choose one meaningful path to trace.

Avoid summarizing every folder.

### Feature or subsystem

Identify the feature boundary, then trace the path through relevant modules.

### Single file

Focus on responsibility, control/data flow, dependencies, and surrounding context.

### Small code snippet

Explain only what is needed to understand the snippet and its behavior.

## Guardrails

Do not:

- replace code reading with a giant repository summary,
- explain every line when only the important flow matters,
- invent architecture that is not supported by the code,
- assume a file is important merely because it is large,
- keep exploring after the developer has enough context.

Do:

- use source code as evidence,
- distinguish confirmed structure from inference,
- encourage navigation skills,
- connect local code to the wider system,
- return control when the developer can continue exploring independently.

## Completion

The workflow is complete when the developer can navigate the relevant area with a useful mental model and identify a reasonable next place to look without needing the AI to narrate every step.
