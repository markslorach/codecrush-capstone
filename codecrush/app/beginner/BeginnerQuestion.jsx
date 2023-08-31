import React, { useState, useEffect } from 'react';

async function getQuestions() {
  const res = await fetch("http://localhost:8082/api/questions");
  return res.json();
}

async function getAnswers() {
  const res = await fetch("http://localhost:8082/api/answers");
  return res.json();
}

export default function BeginnerQuestion() {
  const [beginnerQuestions, setBeginnerQuestions] = useState([]);
  const [beginnerAnswers, setBeginnerAnswers] = useState([]);
  const [correct, setCorrect] = useState(null);

  useEffect(() => {
    async function getData() {
      const now = new Date();
      const day = now.getDay();
    //   console.log(day)
      const questions = await getQuestions();
      const beginnerQuestions = questions.filter((question) => {
        return question.questionLevel === 1 && question.dayID === day;
      });

      setBeginnerQuestions(beginnerQuestions);

      const answers = await getAnswers();
      const beginnerAnswers = answers.filter((answer) => {
        return beginnerQuestions.some(beginnerQuestion => beginnerQuestion.id === answer.question.id);
      });

      setBeginnerAnswers(beginnerAnswers);
    }

    getData();
  }, []);

  const handleAnswerClick = (event) => {
    console.log(event)
    if(event.target.value === "false"){
      setCorrect(false)
    }else{
      setCorrect(true)
    }
  }


  return (
    <>
      {beginnerQuestions.map((question) => (
        <div key={question.id}>
          <h2>{question.questionText}</h2>
        </div>
      ))}

      {beginnerAnswers.map((answer) => (
        <div key={answer.id} >
          <button value={answer.correct} key={answer.id} onClick={handleAnswerClick}>{answer.answerText}</button>
        </div>
      ))}
    </>
  );
}
