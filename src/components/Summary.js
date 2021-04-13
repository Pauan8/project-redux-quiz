import React from 'react';
import { useDispatch } from 'react-redux'

import './SummaryStyle.css';
import { quiz } from '../reducers/quiz'

export const Summary = () => {

  const dispatch = useDispatch()

  return (
    <section className="summary">
      <div className="summary-card">
        <h1 className="summary-card__heading">Summary</h1>
        <p className="summary-card__details">Your correct answers: 4/5</p>
        <p className="summary-card__precentage"> 20% accuracy </p>
        <button onClick={() => dispatch(quiz.actions.restart())} type="button" className="play-again-btn">Play again</button>
      </div>
    </section>
  );
};
