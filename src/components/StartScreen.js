import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { quiz } from '../reducers/quiz';

// Import the CSS file for this component
import './StartScreenStyle.css';

export const StartScreen = () => {
  const dispatch = useDispatch();

  return (
    <div className="start-screen-container">
      <div className="text-button-wrapper">
        <p className="start-screen-text">Welcome to this super awesome quiz!</p>
        <button onClick={() => dispatch(quiz.actions.goToNextQuestion())} type="button" className="start-screen-button">
          Start Quiz
        </button>
      </div>
    </div>
  );
};
