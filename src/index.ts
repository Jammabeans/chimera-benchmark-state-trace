import { stateTraceCases } from "./cases";
import { scoreFinalState } from "./score";

export const benchmarkMetadata = {
  id: "state-trace-scaffold",
  weaknessCategory: "state-trace",
  scoring: "final-answer-exact-match"
} as const;

export { stateTraceCases, scoreFinalState };
export type { ScoreResult, StateTraceCase, StateTraceOperation, StateTraceStep, TraceOperationType } from "./types";

