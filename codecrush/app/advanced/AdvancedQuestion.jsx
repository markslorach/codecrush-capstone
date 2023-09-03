import Link from "next/link";
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import Request from "../helpers/Request";
import Image from "next/image";
import Code from "@/public/images/test_code.png";

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
  const [correct, setCorrect] = useState(null);
  const [result, setResult] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [checkClicked, setCheckClicked] = useState(false);
  const [alreadyAnswered, setAlreadyAnswered] = useState(false);

  const { user } = UserAuth();

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
        return advancedQuestions.some(
          (advancedQuestion) => advancedQuestion.id === answer.question.id
        );
      });

      setAdvancedAnswers(advancedAnswers);
    }

    getData();
  }, []);

  const handleAnswerClick = (event, answer) => {
    setSelectedAnswer(answer);
    if (event.target.value === "false") {
      setCorrect(false);
    } else {
      setCorrect(true);
    }
  };

  const checkAnswer = () => {
    if (correct === true) {
      const updateUser = {
        streak: user[0].streak + 1,
        score: user[0].score + 10,
        username: user[0].username,
        uid: user[0].uid,
        id: user[0].id,
      };
      console.log(updateUser);

      const request = new Request();
      request
        .put(`http://localhost:8082/api/users/${user.uid}`, updateUser)
        .then(() => {
          return setResult("You are correct!");
        });
    } else if (correct === false) {
      const updateUser = {
        streak: 0,
        score: user[0].score,
        username: user[0].username,
        uid: user[0].uid,
        id: user[0].id,
      };
      console.log(updateUser);

      const request = new Request();
      request
        .put(`http://localhost:8082/api/users/${user.uid}`, updateUser)
        .then(() => {
          return setResult("You are wrong! The correct answer is");
        });
    } else {
      return setResult("Please select an answer");
    }
  };

  const logAttempt = () => {
    const updatedQuestions = [...advancedQuestions];
    updatedQuestions[0].haveAnswered.push(user[0].uid);
    setAdvancedQuestions(updatedQuestions);
  };

  const updateQuestion = () => {
    const request = new Request();
    request.put(
      `http://localhost:8082/api/questions/${advancedQuestions[0].id}`,
      advancedQuestions[0]
    );
  };

  const handleCheckClick = () => {
    if (
      user[0].uid &&
      advancedQuestions[0].haveAnswered.includes(user[0].uid)
    ) {
      setAlreadyAnswered(true);
    } else {
      setCheckClicked(true);
      checkAnswer();
      logAttempt();
      updateQuestion();
      console.log(user[0]);
    }
  };

  const setColour = (answer) => {
    if (checkClicked) {
      if (selectedAnswer === answer && correct) {
        return "text-green-500";
      } else if (selectedAnswer === answer && !correct) {
        return "text-red-500";
      }
    }
  };

  return (
    <>
      <Link href="/dashboard">
        <button>Close</button>
      </Link>

      <div className="flex justify-center">
        <Image src={Code} alt="Code" placeholder="blur" />
      </div>

      {advancedQuestions.map((question) => (
        <div key={question.id}>
          <h2>{question.questionText}</h2>
        </div>
      ))}

      {advancedAnswers.map((answer) => (
        <div key={answer.id}>
          <button
            value={answer.correct}
            onClick={(event) => handleAnswerClick(event, answer)}
            className={setColour(answer)}
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
          {advancedQuestions.map((question) => (
            <div key={question.id}>
              <p>{question.hintText}</p>
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleCheckClick}>Check Answer</button>
      <h2>{alreadyAnswered ? "Already answered" : result}</h2>
      {/* <p>{explanation}</p> */}
    </>
  );
}