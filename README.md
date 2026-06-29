# chimera-benchmark-state-trace

This repository is an external Chimera benchmark package for safe synthetic `state-trace` evaluation.

Focus area: **state tracking / long-horizon consistency** (`state-trace`).

## How state-trace is modeled here

Each case starts from a short initial string and applies a deterministic sequence of text operations (for example append, prepend, reverse, drop-first, replace-all). The model task is to track state transitions correctly and return the final state.

Cases are intentionally:

- Safe and synthetic (no real-world security behavior)
- Deterministic (no randomness)
- Small and human-readable
- Structured by transition count to increase difficulty

## Current levels

- `level-1`: 2-step trace
- `level-2`: 4-step trace
- `level-3`: 6-step trace

## Current scoring

Scoring is currently minimal and final-answer based: submitted final state is compared to expected final state with exact string match.

## Runtime contract

This package now exposes a minimal static runtime surface for Chimera Core:

- `cases`: deterministic static cases with runtime fields (`id`, `levelId`, `title`, `prompt`, optional metadata)
- `scoreAnswer(caseId, answerText)`: plain-text final-answer scoring
- `runtimeBenchmark`: bundled runtime module shape containing manifest metadata, cases, and scoring
- `runtime-benchmark.json`: static runtime artifact published at the repository root for Chimera Core manual execution (`scoringMode: "exact-text"`)

Answers are plain text only, cases are static (no generation/loading), and scoring remains simple exact match against each case's expected final state.

## Current status

The repository now includes:

- Local benchmark types for state-trace cases
- Three initial deterministic synthetic cases (2/4/6 transitions)
- A minimal scoring helper for final-state exact match
- Exports from the entrypoint for metadata, cases, and scoring

Still intentionally not included yet:

- Full benchmark runner or CLI
- Test harness (Vitest/Jest)
- Random generation
- Advanced scoring rubric

## Manifest contract alignment

Root manifest is kept at `benchmark.manifest.json` and currently aligned to Chimera Core contract expectations:

- `id`: `state-trace`
- `name`: `State Trace`
- `supportedModes`: `["single-turn", "multi-turn"]`
- `owner`: string value (`"chimera-labs"`)

