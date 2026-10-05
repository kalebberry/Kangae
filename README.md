# Kangae

**Think with AI, not through AI.**

Kangae is a human-first development protocol for working with AI without giving up the reasoning, debugging, experimentation, and decision-making that build engineering skill.

The goal is simple: use AI for leverage without turning yourself into a passive reader of generated solutions.

## How to use Kangae

1. Copy `KANGAE.md` into the root of your project.
2. Tell your AI coding assistant to read and follow it for the session or project.
3. Work normally. You do not need to manually select assistance levels.
4. When you get stuck, the AI should gradually increase help.
5. When you regain understanding and momentum, the AI should return control to you.

Example project:

```text
my-project/
├── KANGAE.md
├── package.json
├── src/
└── ...
```

Then tell your AI:

> Read `KANGAE.md` and follow it while we work on this project.

If your AI tool supports persistent project instructions, you can reference this file from that tool's native instruction file. Kangae itself stays vendor-neutral.


## Keep Kangae local in a work repository

If you want to use `KANGAE.md` in a company repository without committing it, add it to that repository's local Git exclude file:

```text
.git/info/exclude
```

Add:

```text
KANGAE.md
CLAUDE.local.md
```

Then save the file and verify with:

```bash
git status
```

If the files are untracked, they should no longer appear in `git status`.

Unlike the project's shared `.gitignore`, `.git/info/exclude` is local to your clone and is not committed or shared with coworkers.

If you only use `KANGAE.md`, you only need to add that one filename.

> Note: ignore rules do not stop Git from tracking a file that has already been committed or added to the index. This setup is intended for files that remain local-only.

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

## Core idea

> **Use AI aggressively for leverage, but conservatively for cognition.**

AI should amplify your engineering ability, not become a substitute for developing it.

## Protocol

See [KANGAE.md](./KANGAE.md).

## License

MIT.
