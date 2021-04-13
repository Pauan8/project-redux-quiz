import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz';

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizOver = useSelector((state) => state.quiz.quizOver);
  console.log(quizOver);
  
  const dispatch = useDispatch();

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  console.log(question.id)
  return (
    <section className='current-question'>
      <div className='question-container'>
        <h1>Question: {question.questionText}</h1>
        <p className="question-counter">Current question {}</p>
      </div>
      <div className="button-container">
        <div className="buttons-inner">
            <button onClick={() => dispatch(quiz.actions.goToNextQuestion())} className="answer-button">{question.options[0]}</button>
           <button onClick={() => dispatch(quiz.actions.goToNextQuestion())} className="answer-button">{question.options[1]}</button>
        </div>
        <div className="buttons-inner">
            <button onClick={() => dispatch(quiz.actions.goToNextQuestion())} className="answer-button">{question.options[2]}</button>
            <button onClick={() => dispatch(quiz.actions.goToNextQuestion())} className="answer-button">{question.options[3]}</button>
        </div> 
      </div>
    </section>
  )
}
