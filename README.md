# Kangae — 考え

**Think with AI, not through AI.**

*Kangae* (考え) means **thought**, **thinking**, or **an idea** in Japanese.

Kangae is a way of working with AI that protects the reasoning, debugging, experimentation, judgment, and learning that build real engineering capability.

The goal is simple: use AI for leverage without turning yourself into a passive reader of generated solutions.

## How to use Kangae

Kangae is packaged as one portable folder:

```text
.kangae/
├── KANGAE.md
├── JOURNAL-TEMPLATE.md
├── skills/
│   ├── debug-with-me/
│   ├── review-this/
│   ├── teach-me/
│   ├── reconstruct/
│   └── journal/
└── icm/
    ├── CONTEXT.md
    ├── 01_understand/
    ├── 02_think/
    ├── 03_attempt/
    ├── 04_test/
    ├── 05_review/
    └── 06_reflect/
```

To use it in a project:

1. Copy the entire `.kangae/` folder into the project root.
2. Tell your AI coding assistant:

> Read `.kangae/KANGAE.md` and follow Kangae while we work.

3. Work normally. Kangae handles adaptive assistance, skills, and optional ICM routing without requiring you to manage them manually.

Example:

```text
my-project/
├── .kangae/
│   ├── KANGAE.md
│   ├── JOURNAL-TEMPLATE.md
│   ├── skills/
│   └── icm/
├── package.json
└── src/
```

If your AI tool supports persistent project instructions, point its native instruction file at `.kangae/KANGAE.md`. This keeps Kangae itself vendor-neutral.

### Keep Kangae local in a work repository

If you want Kangae available locally without committing it to a company repository, add this to:

```text
.git/info/exclude
```

```text
.kangae/
```

Then verify with:

```bash
git status
```

Unlike the project's shared `.gitignore`, `.git/info/exclude` stays local to your clone.

> Ignore rules do not untrack files that are already committed or staged.

## What Kangae is for

Kangae is designed for developers who want AI assistance without outsourcing the parts of software development they still want to learn and retain.

It encourages AI to:

- let you reason before taking over,
- adapt help when you are genuinely stuck,
- preserve productive struggle,
- help test hypotheses instead of guessing,
- explain why solutions work,
- distinguish bugs from preferences,
- use AI code review as a second opinion rather than a source of truth,
- return control once you can continue on your own.

It does **not** mean refusing AI-generated code. Delegation is useful when the work is repetitive, low-value, already understood, or when speed matters more than practice.


## Context-aware, without becoming a generic study mode

Kangae keeps one core objective: **use AI without outsourcing the thinking that develops your capability.**

It can adapt naturally to three common contexts:

- **Build** — preserve engineering ownership while creating and debugging software.
- **Study** — preserve active learning through recall, prediction, practice, and progressively stronger guidance.
- **Review** — preserve judgment through verification, evidence, tradeoffs, and independent evaluation.

These are not separate protocols, and you do not need to manually switch between them. A single session can move between Build, Study, and Review as the work changes.





## Anti-deskilling checks

Kangae also includes three lightweight checks that stay mostly invisible during normal work:

- **Proof of understanding** — when it matters, verify that you can explain, predict, recreate, or apply the important idea rather than merely recognize the AI's answer.
- **AI takeover detection** — notice sustained patterns where AI is doing nearly all of the meaningful engineering work and gently return ownership.
- **Assistance debt** — notice when the same concept repeatedly requires heavy AI help and suggest a focused learning or reconstruction step.

These are not scores, quizzes, or mandatory gates. They exist to catch patterns that can quietly turn useful assistance into dependency.

## Reusable skills

Kangae keeps its core behavior always on, while repeatable workflows can live as skills.

```text
.kangae/skills/
├── debug-with-me/
│   └── SKILL.md
├── review-this/
│   └── SKILL.md
├── teach-me/
│   └── SKILL.md
├── reconstruct/
│   └── SKILL.md
└── journal/
    └── SKILL.md
```

The distinction is simple:

> **Protocol = always-on behavior. Skill = reusable workflow.**

The skills cover structured debugging, review, deliberate learning, reconstruction after AI help, and engineering journaling.

Lightweight overrides such as `Hint`, `Let me try`, `I'm lost`, `Just show me`, and `Implement it` stay conversational rather than becoming skills.

If an AI tool supports reusable skills, these files can be adapted to its skill system. If it does not, the Markdown still works as a portable workflow definition.

## Optional ICM workspace

Kangae includes an optional ICM-style workspace for making important stages of development visible and reviewable.

```text
.kangae/icm/
├── CONTEXT.md
├── 01_understand/
│   └── CONTEXT.md
├── 02_think/
│   └── CONTEXT.md
├── 03_attempt/
│   └── CONTEXT.md
├── 04_test/
│   └── CONTEXT.md
├── 05_review/
│   └── CONTEXT.md
└── 06_reflect/
    └── CONTEXT.md
```

The stages roughly map to:

**Understand → Think → Attempt → Test → Review → Reflect**

They are **not a required pipeline**. Use only the stages that add value.

Kangae remains the behavior layer; ICM becomes the workflow layer. Each stage defines what it reads, what job it owns, what artifact it produces, and what checkpoint should be satisfied before routing onward.

You do **not** need to manually operate the stages. The AI should infer which stages add value, and stages may be skipped or revisited as evidence changes the direction of the work.

A useful shorthand is:

> **Kangae = how we collaborate. ICM = where the work is in its lifecycle. Skills = reusable workflows inside that work.**

See [.kangae/icm/CONTEXT.md](./.kangae/icm/CONTEXT.md) for routing guidance.

## Engineering journal

Kangae can also be used to keep a lightweight engineering journal for reflection.

After a meaningful debugging, build, study, or review session, the AI can draft a short entry covering:

- the problem,
- what you initially thought,
- what you tried,
- what the evidence showed,
- what changed your mind,
- the decision you made,
- what you learned,
- and what you still want to revisit.

The journal is meant for **review and reflection**, not passive logging. You should correct the AI's draft so the final entry reflects your actual understanding.

A suggested template is included in [.kangae/JOURNAL-TEMPLATE.md](./.kangae/JOURNAL-TEMPLATE.md).

## Core idea

> **Use AI aggressively for leverage, but conservatively for cognition.**

AI should amplify your engineering ability, not become a substitute for developing it.

## Protocol

See [.kangae/KANGAE.md](./.kangae/KANGAE.md).

## License

MIT.
