import Link from "next/link";
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import Request from "../helpers/Request";
import Image from "next/image";
import Code from "@/public/images/question_images/advanced_question_06.png";
import { DayDate } from "../components/DayDate";

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
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [checkClicked, setCheckClicked] = useState(false);
  const [alreadyAnswered, setAlreadyAnswered] = useState(false);
  const [explanation, setExplanation] = useState("");

  const { user } = UserAuth();

  useEffect(() => {
    async function getData() {
      const now = new Date();
      const day = now.getDay();
      const questions = await getQuestions();
      const beginnerQuestions = questions.filter((question) => {
        return question.questionLevel === 1 && question.dayID === day;
      });

      setBeginnerQuestions(beginnerQuestions);
      setExplanation(beginnerQuestions[0].explanation);

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
          return setResult("You are wrong");
        });
    } else {
      return setResult("Please select an answer");
    }
  };

  const logAttempt = () => {
    const updatedQuestions = [...beginnerQuestions];
    updatedQuestions[0].haveAnswered.push(user[0].uid);
    setBeginnerQuestions(updatedQuestions);
  };

  const updateQuestion = () => {
    const request = new Request();
    request.put(
      `http://localhost:8082/api/questions/${beginnerQuestions[0].id}`,
      beginnerQuestions[0]
    );
  };

  const handleCheckClick = () => {
    if (
      user[0].uid &&
      beginnerQuestions[0].haveAnswered.includes(user[0].uid)
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
    if (selectedAnswer === answer) {
      if (checkClicked) {
        if (correct) {
          return "bg-green-200";
        } else {
          return "bg-red-200";
        }
      } else {
        return "bg-blue-200";
      }
    }
  };

  return (
    <>
      <Link href="/dashboard">
        <button className=" hover:text-gray-500">
          <b>X</b>
        </button>
      </Link>

      {/* CODE BOX */}
      <div className="flex justify-center min-w-full pt-5 pb-6">
        <Image
          className="rounded-md shadow-md"
          src={Code}
          alt="Code"
          placeholder="blur"
        />
      </div>

      {beginnerQuestions.map((question) => (
        <div
          className="p-3 bg-blue-100 rounded-md shadow-sm mb-6"
          key={question.id}
        >
          <p className="text-base">{question.questionText}</p>
        </div>
      ))}

      {/* ANSWERS */}
      <h2 className="dash-heading">Select an answer</h2>

      {beginnerAnswers.map((answer) => (
        <div key={answer.id}>
          <div
            value={answer.correct}
            onClick={(event) => handleAnswerClick(event, answer)}
            className={`bg-white mb-4 w-100 p-3 rounded-md shadow-md ${setColour(
              answer
            )}`}
          >
            {answer.answerText}
          </div>
        </div>
      ))}

      {/* HINT BOX */}
      <div className="flex justify-center ">
        <div className="collapse bg-blue-100 rounded-md">
          <input type="checkbox" />
          <div className="collapse-title text-lg font-medium cursor-grab">
            Click for a hint
          </div>
          <div className="collapse-content">
            {beginnerQuestions.map((question) => (
              <div key={question.id}>
                <p>{question.hintText}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CHECK ANSWER */}
      <div className="min-w-full bg-gray-200 fixed bottom-0 left-0 flex justify-center p-8 rounded-t-md border-t-2 border-gray-100">
        <button
          onClick={handleCheckClick}
          className="p-3 w-full bg-white rounded-md shadow-sm font-semibold"
        >
          Check Answer
        </button>
      </div>

      <div>
        <h2>{alreadyAnswered ? <p>Already answered</p> : result}</h2>
      </div>

      {/* <div
        className="bg-black text-white p-5"
        style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
      > */}
      {checkClicked ? explanation : ""}
      {/* </div> */}
    </>
  );
}
