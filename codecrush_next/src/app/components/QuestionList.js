import React from 'react'
import Answer from './Answer'
import QuestionBeginner from './QuestionBeginner'
import QuestionIntermediate from './QuestionIntermediate'
import QuestionAdvanced from './QuestionAdvanced'



const QuestionList = ({questions, answers}) => {

    if (questions.length === 0){
        return(<p>Loading... </p>)
    }

    const beginnerQuestions = questions.filter((question) => {
        return(
            question.questionLevel === 1
        )
    })

    const intermediateQuestions = questions.filter((question) => {
        return(
            question.questionLevel === 2
        )
    })

    const advancedQuestions = questions.filter((question) => {
        return(
            question.questionLevel === 3
        )
    })



    const beginnerQuestion = beginnerQuestions.map((question, index) => {
        return(
            <p key={index}>
            <QuestionBeginner question = {question} answers={answers} />
            </p> 
        )
    })

    const intermediateQuestion = intermediateQuestions.map((question, index) => {
        return(
            <p key={index}>
            <QuestionIntermediate question = {question} answers={answers} />
            </p> 
        )
    })

    const advancedQuestion = advancedQuestions.map((question, index) => {
        return(
            <p key={index}>
            <QuestionAdvanced question = {question} answers={answers} />
            </p> 
        )
    })

  return (
    <>
    {beginnerQuestion}
    {intermediateQuestion}
    {advancedQuestion}
    </>
  )
}

export default QuestionList