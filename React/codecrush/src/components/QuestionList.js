import React from 'react'
import Answer from './Answer'
import QuestionBeginner from './QuestionBeginner'



const QuestionList = ({questions, answers}) => {

    if (questions.length === 0){
        return(<p>Loading... </p>)
    }

    

    const questionElements = questions.map((question, index) => {
        return(
            <p key={index}>
            <QuestionBeginner question = {question} answers={answers} />
            </p> 
        )
    })

  return (
    <>
    {questionElements}
    </>
  )
}

export default QuestionList