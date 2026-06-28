export type TraceOperationType = "append" | "prepend" | "reverse" | "drop-first" | "replace-all";

export interface RuntimeBenchmarkCase<TMetadata = Record<string, unknown>> {
  id: string;
  levelId: string;
  title: string;
  prompt: string;
  metadata?: TMetadata;
}

export interface StateTraceOperation {
  type: TraceOperationType;
  value?: string;
  from?: string;
  to?: string;
}

export interface StateTraceStep {
  id: string;
  instruction: string;
  operation: StateTraceOperation;
  expectedStateAfterStep: string;
}

export interface StateTraceCaseMetadata {
  description: string;
  transitions: number;
  initialState: string;
  steps: StateTraceStep[];
  expectedFinalState: string;
}

export interface StateTraceCase extends RuntimeBenchmarkCase<StateTraceCaseMetadata> {
  metadata: StateTraceCaseMetadata;
}

export interface ScoreAnswerResult {
  correct: boolean;
  score: number;
  expectedAnswer: string;
  message: string;
}

