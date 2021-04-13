import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";
import "./CurrentQuestion.css";

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const dispatch = useDispatch();

  const handleClick = (i) => {
    dispatch(
      quiz.actions.submitAnswer({ questionId: question.id, answerIndex: i })
    );
    dispatch(quiz.actions.goToNextQuestion());
  };

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  console.log(question.id);
  return (
    <section className="current-question">
      <div className="question-container">
        <h1>Question: {question.questionText}</h1>
        <p className="question-counter">Current question {question.id}/5</p>
      </div>
      <div className="button-container">
        {question.options.map((option, index) => (
          <div key={index} className="buttons-inner">
            <button
              className="answer-button"
              onClick={() => handleClick(index)}
            >
              {option}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
