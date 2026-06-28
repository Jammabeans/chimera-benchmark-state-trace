import { StateTraceCase } from "./types";

export const stateTraceCases: StateTraceCase[] = [
  {
    id: "trace-2-step",
    levelId: "level-1",
    name: "2-step trace",
    description: "Track two deterministic state transitions.",
    transitions: 2,
    initialState: "AX",
    steps: [
      {
        id: "s1",
        instruction: "Append 'B' to the right.",
        operation: { type: "append", value: "B" },
        expectedStateAfterStep: "AXB"
      },
      {
        id: "s2",
        instruction: "Reverse the full string.",
        operation: { type: "reverse" },
        expectedStateAfterStep: "BXA"
      }
    ],
    expectedFinalState: "BXA"
  },
  {
    id: "trace-4-step",
    levelId: "level-2",
    name: "4-step trace",
    description: "Track four deterministic state transitions.",
    transitions: 4,
    initialState: "M2",
    steps: [
      {
        id: "s1",
        instruction: "Prepend 'Q' to the left.",
        operation: { type: "prepend", value: "Q" },
        expectedStateAfterStep: "QM2"
      },
      {
        id: "s2",
        instruction: "Replace every '2' with '7'.",
        operation: { type: "replace-all", from: "2", to: "7" },
        expectedStateAfterStep: "QM7"
      },
      {
        id: "s3",
        instruction: "Append 'Z' to the right.",
        operation: { type: "append", value: "Z" },
        expectedStateAfterStep: "QM7Z"
      },
      {
        id: "s4",
        instruction: "Drop the first character.",
        operation: { type: "drop-first" },
        expectedStateAfterStep: "M7Z"
      }
    ],
    expectedFinalState: "M7Z"
  },
  {
    id: "trace-6-step",
    levelId: "level-3",
    name: "6-step trace",
    description: "Track six deterministic state transitions.",
    transitions: 6,
    initialState: "R0",
    steps: [
      {
        id: "s1",
        instruction: "Append 'a' to the right.",
        operation: { type: "append", value: "a" },
        expectedStateAfterStep: "R0a"
      },
      {
        id: "s2",
        instruction: "Replace every '0' with '9'.",
        operation: { type: "replace-all", from: "0", to: "9" },
        expectedStateAfterStep: "R9a"
      },
      {
        id: "s3",
        instruction: "Prepend 'L' to the left.",
        operation: { type: "prepend", value: "L" },
        expectedStateAfterStep: "LR9a"
      },
      {
        id: "s4",
        instruction: "Reverse the full string.",
        operation: { type: "reverse" },
        expectedStateAfterStep: "a9RL"
      },
      {
        id: "s5",
        instruction: "Drop the first character.",
        operation: { type: "drop-first" },
        expectedStateAfterStep: "9RL"
      },
      {
        id: "s6",
        instruction: "Append 'x' to the right.",
        operation: { type: "append", value: "x" },
        expectedStateAfterStep: "9RLx"
      }
    ],
    expectedFinalState: "9RLx"
  }
];

