import Link from "next/link";
import React, { useState, useEffect } from "react";

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
  const [result, setResult] = useState("");

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
        return beginnerQuestions.some(
          (beginnerQuestion) => beginnerQuestion.id === answer.question.id
        );
      });

      setBeginnerAnswers(beginnerAnswers);
    }

    getData();
  }, []);

  const handleAnswerClick = (event) => {
    console.log(event);
    if (event.target.value === "false") {
      setCorrect(false);
    } else {
      setCorrect(true);
    }
  };

  const handleCheckClick = () => {
    if (correct === true) {
      return setResult("You are correct!");
    } else if (correct === false) {
      return setResult("You are wrong!");
    } else {
      return setResult("Please select an answer");
    }
  };

  return (
    <>
      <Link href="/dashboard">
        <button>Close</button>
      </Link>
      {beginnerQuestions.map((question) => (
        <div key={question.id}>
          <h2>{question.questionText}</h2>
        </div>
      ))}

      {beginnerAnswers.map((answer) => (
        <div key={answer.id}>
          <button
            value={answer.correct}
            key={answer.id}
            onClick={handleAnswerClick}
          >
            {answer.answerText}
          </button>
        </div>
      ))}

      <div className="collapse bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium cursor-grab">
          Wanna see a hint?
        </div>
        <div className="collapse-content">
          <p>This is a hint</p>
        </div>
      </div>

      <button onClick={handleCheckClick}>Check Answer</button>
      <h2>{result}</h2>
    </>
  );
}
