import { StateTraceCase, ScoreResult } from "./types";

export function scoreFinalState(traceCase: Pick<StateTraceCase, "expectedFinalState">, submittedFinalState: string): ScoreResult {
  const expected = traceCase.expectedFinalState;
  const received = submittedFinalState;

  return {
    isCorrect: received === expected,
    expected,
    received
  };
}

