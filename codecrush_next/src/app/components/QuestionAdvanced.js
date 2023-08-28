import React from "react";
import Answer from "./Answer";
import Hint from "./Hint";

const QuestionAdvanced = ({question, answers}) => {

  const answerList = question.answers
 
    
  

  const answerElements = answerList.map((answer, index) => {
    return(
      <p>
      <Answer key={index} answer = {answer} />
      </p>
      
    )
    
  })


  return (
    <>
    <p>{question.questionText}</p>
    <p>{question.hintText}</p>
    <p>{answerElements}</p>
    </>
  );
}

export default QuestionAdvanced;
