'use client' 
import react, { useState } from "react";

type Step = {
  content: string;
};

type Problem = {
  title: string;
  steps: Step[];
};

const problems: Problem[] = [
  {
    title: "Problem 1",
    steps: [
      { content: "Step 1-1" },
      { content: "Step 1-2" },
      { content: "Step 1-3" },
    ],
  },
  {
    title: "Problem 2",
    steps: [{ content: "Step 2-1" }, { content: "Step 2-2" }],
  },
];

const SolutionMethod = ({ problemIndex }: { problemIndex: number }) => {


  const problem = problems[problemIndex];
  const stepGen = problemStepsGenerator(problem.steps);

  const [currentStep, setCurrentStep] = useState<Step>(stepGen.next().value);

  function* problemStepsGenerator(steps: Step[]) {
    let index = 0;
    while (true) {
      yield steps[index];
      index = (index + 1) % steps.length;
    }
  }

  const handleNextStep = () => {
    setCurrentStep(stepGen.next().value);
  };

  return (
    <div>
      <h2>{problem.title}</h2>
      <p>{currentStep.content}</p>
      <button onClick={handleNextStep}>Next Step</button>
    </div>
  );
};

export default SolutionMethod