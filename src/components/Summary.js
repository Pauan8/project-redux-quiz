import React from 'react';
import { useDispatch, useSelector} from 'react-redux'

import './SummaryStyle.css';
import { quiz } from '../reducers/quiz'

export const Summary = () => {
  const answer = useSelector((state) => state.quiz.answers)
  const dispatch = useDispatch()
  console.log(answer)

  let correctAnswers = answer.filter((item) => item.isCorrect === true)
  console.log(correctAnswers.length)
  
  return (
    <section className="summary">
      <div className="summary-card">
        <h1 className="summary-card__heading">Summary</h1>
        <p className="summary-card__details">Your correct answers: {correctAnswers.length}/5</p>
        <p className="summary-card__precentage">{correctAnswers.length/5*100}% accuracy </p>
        <button onClick={() => dispatch(quiz.actions.restart())} type="button" className="play-again-btn">Play again</button>
      </div>
    </section>
  );
};
