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

  return (
    <>
      {beginnerQuestions.map((question) => (
        <div key={question.id}>
          <h2>{question.questionText}</h2>
        </div>
      ))}

      {beginnerAnswers.map((answer) => (
        <div key={answer.id}>
          <h2>{answer.answerText}</h2>
        </div>
      ))}
    </>
  );
}
