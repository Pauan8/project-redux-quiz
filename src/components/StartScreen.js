import React from "react";

import StartScreenStyle from "./StartScreenStyle.css";

export const StartScreen = () => {
  return (
    <div className="start-screen-container">
      <div className="text-button-wrapper">
        <p className="start-screen-text">Welcome to this super awesome quiz!</p>
        <button className="start-screen-button">Start Quiz</button>
      </div>
    </div>
  );
};
