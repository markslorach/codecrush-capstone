import Link from "next/link";
import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import Request from "../helpers/Request";
import Image from "next/image";
import Code from "@/public/images/question_images/carbon.png";
import Score from "@/public/images/score.png";
import { UserScore } from "../profile/UserScore";
import { motion } from "framer-motion";

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
          return setResult("Correct!");
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
          return setResult("Incorrect");
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
          return "text-green-200";
        } else {
          return "text-red-200";
        }
      } else {
        return "text-blue-200";
      }
    }
  };

  return (
    <>
      <div className="flex place-content-between py-5 mt-5">
        <Link className="flex flex-col justify-center" href="/dashboard">
          <button className=" hover:text-gray-500">
            <b className="text-lg">X</b>
          </button>
        </Link>

        <div className="bg-slate-200 rounded-full py-1 px-3">
          <div className="flex items-center gap-2">
            <b>
              <UserScore />
            </b>
            <Image
              className="mb-1"
              src={Score}
              alt="Score"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>

      {/* CODE BOX */}
      <div className="flex justify-center min-w-full pt-5 pb-2">
        <Image
          className="rounded-md shadow-lg"
          src={Code}
          alt="Code"
          placeholder="blur"
        />
      </div>

      {beginnerQuestions.map((question) => (
        <div
          className="p-3 bg-blue-100 rounded-md shadow-sm mb-10"
          key={question.id}
        >
          <p className="text-sm font-medium">{question.questionText}</p>
        </div>
      ))}
      

      {/* ANSWERS */}
      <section className="mb-5">
        <div className="flex flex-row gap-2 items-center my-4">
          <div className="avatar placeholder">
            <div className="bg-gray-600 text-white rounded-full w-4">
              <span className="text-xs">i</span>
            </div>
          </div>
          <h2 className="flex items-center text-sm">Select an answer</h2>
        </div>

        {beginnerAnswers.map((answer) => (
          <div key={answer.id}>
            <button
              value={answer.correct}
              onClick={(event) => handleAnswerClick(event, answer)}
              className={`mb-4 min-w-full text-left text-sm font-medium p-3 rounded-md shadow-md bg-white ${setColour(
                answer
              )}`}
            >
              {answer.answerText}
            </button>
          </div>
        ))}
      </section>

   
      <div className="text-center text-lg mt-4">{result}</div>


      {/* HINT BOX */}
      <details className="collapse bg-blue-100 rounded-md shadow-sm">
        <summary className="collapse-title text-base font-normal p-5">
          Need a hint?
        </summary>
        <div className="collapse-content text-sm italic">
          <div>
            {beginnerQuestions.map((question) => (
              <div key={question.id}>
                <p>{question.hintText}</p>
              </div>
            ))}
          </div>
        </div>
      </details>

      <div className="bg-slate-50 min-w-full h-[59.9rem] -z-10 absolute left-0 bottom-0 rounded-t-lg mt-4 shadow-lg "></div>

      {/* CHECK ANSWER */}
      <div className="min-w-full bg-blue-100 fixed bottom-0 left-0 flex justify-center p-8 rounded-t-md border-t-2 border-gray-100">
        <button
          onClick={handleCheckClick}
          className="p-3 w-full bg-white rounded-md shadow-sm font-semibold"
        >
          {alreadyAnswered ? "Already answered" : "Check Answer"}
        </button>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0, overflow: "hidden" }}
        animate={checkClicked ? { height: "auto", opacity: 1 } : {}}
        transition={{ duration: 0.4 }}>
        <p>{explanation}</p>
      </motion.div>


    </>
  );
}
