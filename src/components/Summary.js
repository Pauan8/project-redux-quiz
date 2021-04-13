import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./SummaryStyle.css";
import { quiz } from "../reducers/quiz";

export const Summary = () => {
  const answer = useSelector((state) => state.quiz.answers);
  const dispatch = useDispatch();

  console.log(answer);

  let correctAnswers = answer.filter((item) => item.isCorrect === true);
  let wrongAnswer = answer.filter((item) => item.isCorrect === false);

  return (
    <section className="summary">
      <div className="summary-card">
        <h1 className="summary-card__heading">Summary</h1>
        <p className="summary-card__details">
          Your correct answers: {correctAnswers.length}/5
        </p>
        <p className="summary-card__precentage">
          {(correctAnswers.length / 5) * 100}% accuracy
        </p>
        <h2>You got these questions wrong:</h2>
        {wrongAnswer.map((item) => (
          <div key={item.question.id} className="summary-card__wrong">
            <p> {item.question.questionText}</p>
            <p>
              Correct answer:{" "}
              {item.question.options[item.question.correctAnswerIndex]}
            </p>
          </div>
        ))}
        <button
          onClick={() => dispatch(quiz.actions.restart())}
          type="button"
          className="play-again-btn"
        >
          Play again
        </button>
      </div>
    </section>
  );
};
