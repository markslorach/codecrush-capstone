import React, { useState, useEffect } from 'react';

async function getQuestions() {
const res = await fetch("http://localhost:8082/api/questions");
return res.json();
}

async function getAnswers() {
const res = await fetch("http://localhost:8082/api/answers");
return res.json();
}

export default function AdvancedQuestion() {
const [advancedQuestions, setAdvancedQuestions] = useState([]);
const [advancedAnswers, setAdvancedAnswers] = useState([]);

useEffect(() => {
async function getData() {
    const now = new Date();
    const day = now.getDay();

    const questions = await getQuestions();
    const advancedQuestions = questions.filter((question) => {
    return question.questionLevel === 3 && question.dayID === day;
    });

    setAdvancedQuestions(advancedQuestions);

    const answers = await getAnswers();
    const advancedAnswers = answers.filter((answer) => {
    return advancedQuestions.some(advancedQuestion => advancedQuestion.id === answer.question.id);
    });

    setAdvancedAnswers(advancedAnswers);
}

getData();
}, []);

return (
<>
    {advancedQuestions.map((question) => (
    <div key={question.id}>
        <h2>{question.questionText}</h2>
    </div>
    ))}

    {advancedAnswers.map((answer) => (
    <div key={answer.id}>
        <h2>{answer.answerText}</h2>
    </div>
    ))}
</>
);
}
