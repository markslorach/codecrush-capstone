import React, { useState, useEffect } from 'react';

async function getQuestions() {
  const res = await fetch("http://localhost:8082/api/questions");
  return res.json();
}

async function getAnswers() {
  const res = await fetch("http://localhost:8082/api/answers");
  return res.json();
}

export default function IntermediateQuestion() {
  const [intermediateQuestions, setIntermediateQuestions] = useState([]);
  const [intermediateAnswers, setIntermediateAnswers] = useState([]);

  useEffect(() => {
    async function getData() {
      const now = new Date();
      const day = now.getDay();

      const questions = await getQuestions();
      const intermediateQuestions = questions.filter((question) => {
        return question.questionLevel === 2 && question.dayID === day;
      });

      setIntermediateQuestions(intermediateQuestions);

      const answers = await getAnswers();
      const intermediateAnswers = answers.filter((answer) => {
        return intermediateQuestions.some(intermediateQuestion => intermediateQuestion.id === answer.question.id);
      });

      setIntermediateAnswers(intermediateAnswers);
    }

    getData();
  }, []);

  return (
    <>
      {intermediateQuestions.map((question) => (
        <div key={question.id}>
          <h2>{question.questionText}</h2>
        </div>
      ))}

      {intermediateAnswers.map((answer) => (
        <div key={answer.id}>
          <h2>{answer.answerText}</h2>
        </div>
      ))}
    </>
  );
}
