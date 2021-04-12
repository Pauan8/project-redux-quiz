import React from "react";

import "./SummaryStyle.css";

export const Summary = () => {
  return (
  <section className="summary">
      <div className="summary-card">
        <h1 className="summary-card__heading">Summary</h1>
        <p className="summary-card__details">Your correct answers: 4/5</p>
        <p className="summary-card__precentage"> 20% accuracy </p>
      </div>
      <button className="play-again-btn">Play again</button>
  </section>);
};
