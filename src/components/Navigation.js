import React from "react";
import { useSelector } from "react-redux";

import { CurrentQuestion } from "./CurrentQuestion";
import { StartScreen } from "./StartScreen";
import { Summary } from "./Summary";

export const Navigation = () => {
  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex);
  const quizOver = useSelector((state) => state.quiz.quizOver);

  if (quizOver) {
    return <Summary />;
  }

  return <>{questionIndex === 0 ? <StartScreen /> : <CurrentQuestion />}</>;
};
