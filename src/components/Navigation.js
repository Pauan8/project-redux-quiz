import React from 'react'
import { useSelector } from 'react-redux'

import { CurrentQuestion } from './CurrentQuestion';
import { StartScreen } from './StartScreen'

export const Navigation = () => {
    const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex)

    return (<>{ questionIndex 
    === 0 ? <StartScreen /> : <CurrentQuestion />}
    </>)
}