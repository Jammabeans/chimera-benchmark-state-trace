import { stateTraceCases } from "./cases";
import { ScoreAnswerResult, StateTraceCase } from "./types";

function getCaseById(caseId: string): StateTraceCase | undefined {
  return stateTraceCases.find((candidate) => candidate.id === caseId);
}

export function scoreAnswer(caseId: string, answerText: string): ScoreAnswerResult {
  const traceCase = getCaseById(caseId);

  if (!traceCase) {
    return {
      correct: false,
      score: 0,
      expectedAnswer: "",
      message: `Unknown case id: ${caseId}`
    };
  }

  const expectedAnswer = traceCase.metadata.expectedFinalState;
  const submittedAnswer = answerText;
  const correct = submittedAnswer === expectedAnswer;

  return {
    correct,
    score: correct ? 1 : 0,
    expectedAnswer,
    message: correct ? "Correct final state." : "Incorrect final state."
  };
}

