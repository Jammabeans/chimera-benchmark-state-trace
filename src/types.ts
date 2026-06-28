export type TraceOperationType = "append" | "prepend" | "reverse" | "drop-first" | "replace-all";

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

export interface StateTraceCase {
  id: string;
  levelId: string;
  name: string;
  description: string;
  transitions: number;
  initialState: string;
  steps: StateTraceStep[];
  expectedFinalState: string;
}

export interface ScoreResult {
  isCorrect: boolean;
  expected: string;
  received: string;
}

