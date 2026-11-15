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

## Progressive pull-request review

Use this extension for branch comparisons, PRs, and substantial diffs. Keep small reviews lightweight. Natural requests such as "review Ticket-45 into develop", "review Ticket-45 against develop", and "walk me through this PR" trigger the same skill without requiring a command.

### Resolve scope before reviewing

- Interpret "SOURCE into TARGET" as source/head `SOURCE` and target/base `TARGET`; verify both refs exist. A ticket name may be an issue, PR, or branch: resolve it rather than assuming.
- If a PR is supplied, prefer its actual head/base metadata. Ask one focused question only when resolution remains ambiguous.
- Inspect the merge-base comparison (`git diff TARGET...SOURCE`) to see the proposed changes, not an unrelated working-tree diff. Fetch refs when needed and allowed. Do not checkout, merge, reset, modify files, or post comments as part of a review.
- Collect changed paths, statuses, line counts, commits, and relevant requirements. Mark unavailable data and limitations explicitly. Treat rename, deletion, generated code, binary files, and large/truncated diffs appropriately.
- If the PR changes during the review, flag the new head SHA and re-check affected chunks; do not silently reuse stale conclusions.

### Map first, then inspect

1. **Map:** Summarize purpose, scope, affected behavior, dependencies, and likely cross-file interactions. Group changes by coherent responsibility or user-visible behavior, not fixed line counts. A single chunk may span multiple files, and one file may participate in several chunks.
2. **Prioritize:** Consider correctness, authorization/security, data integrity, accessibility, performance, tests, architecture, and regression potential. High-risk small changes can outrank large cosmetic changes. Label risk as an initial hypothesis, not a confirmed defect.
3. **Show overview:** Report source → target, comparison basis, counts (when available), proposed chunks, priority, and coverage. Explicitly say the mapping scan is **not** a completed review. Offer a concise choice: "Review findings first, or walk through the chunks together?" Allow direct selection of any chunk.
4. **Inspect:** Read actual diffs and sufficient surrounding code, callers, tests, and relevant contracts. Trace dependencies across chunk boundaries. Never call a chunk reviewed solely because its filenames were scanned.
5. **Synthesize:** After inspection, summarize findings and outstanding gaps. For "give me the review first", inspect relevant chunks before giving a findings report; do not relabel preliminary guesses as findings.

### Adaptive depth

- **Overview:** Map the PR and show the plan, provisional risks, and coverage.
- **Guided:** Inspect one logical chunk at a time. Explain intent, relevant paths, tradeoffs, evidence, and a focused question when it develops the developer's judgment. Ask whether to continue, revisit, or go deeper; avoid quizzing on trivial code.
- **Deep dive:** Trace a selected behavior or concern through call sites, error paths, tests, and relevant documentation. Offer verification steps and alternative explanations.
- The developer may switch depth at any time ("give me the review", "next chunk", "go deeper", "skip this", "summarize remaining"). Do not make mode selection a prerequisite.

### Findings and coverage

For each meaningful finding, provide: category (confirmed defect / likely risk / open question / tradeoff / optional improvement / style), severity or impact, file and line or diff location when available, specific evidence, confidence, and an independent verification step. Do not claim a defect is confirmed without sufficient evidence; distinguish unexecuted test suggestions from actual test results.

Track each logical chunk as **unreviewed**, **mapped**, **partially reviewed**, or **reviewed**, with concise notes on examined files/paths, outstanding questions, and cross-chunk dependencies. "Reviewed" means the relevant implementation and evidence were actually inspected, not that correctness is guaranteed. A skipped chunk remains unreviewed. Track truncated or inaccessible content as a coverage gap.

For long sessions, maintain a compact in-conversation checkpoint containing base/head refs and SHAs when known, chunk IDs, statuses, key evidence, open findings, and next step. Resume from that checkpoint after verifying the refs have not changed. Do not persist a file or alter the repository without permission.

Finish with prioritized, deduplicated findings, verified vs. unverified concerns, coverage by chunk, tests actually run (or not run), and the remaining risks. The human decides whether to approve or request changes. Never auto-post a GitHub review or merge a PR.

### Review sizing and safeguards

- Small, focused changes: proceed directly to concise inspection and findings; avoid unnecessary chunk menus.
- Large or complex changes: map first, then review in manageable logical groups. If context or tooling cannot cover the full diff, say exactly what remains unreviewed and offer a continuation plan.
- Do not lose integration issues between chunks; explicitly revisit interfaces, shared state, and changed contracts after individual chunk reviews.
- Review remains read-only. Do not modify shared team instructions such as `CLAUDE.md`, and do not generate patches unless explicitly asked.
