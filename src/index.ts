import { stateTraceCases } from "./cases";
import { scoreAnswer } from "./score";

export const benchmarkMetadata = {
  id: "state-trace",
  name: "State Trace",
  weaknessCategory: "state-trace",
  scoring: "final-answer-exact-match"
} as const;

export const runtimeBenchmark = {
  manifest: benchmarkMetadata,
  cases: stateTraceCases,
  scoreAnswer
} as const;

export { stateTraceCases as cases, scoreAnswer };
export type {
  RuntimeBenchmarkCase,
  ScoreAnswerResult,
  StateTraceCase,
  StateTraceCaseMetadata,
  StateTraceOperation,
  StateTraceStep,
  TraceOperationType
} from "./types";

