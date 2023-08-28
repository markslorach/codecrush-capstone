import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import Login from "../components/Login";
import Home from "../components/Home";
import QuestionBeginner from "../components/QuestionBeginner";
import QuestionIntermediate from "../components/QuestionIntermediate";
import QuestionAdvanced from "../components/QuestionAdvanced";
import Request from "../helpers/Request";

const MainContainer = () => {
const [questions, setQuestions] = useState([]);
const [answers, setAnswers] = useState([]);

useEffect(() => {
getData();
}, []);

const getData = () => {
const request = new Request();
const questionPromise = request.get("/api/questions");
const answersPromise = request.get("/api/answers");
Promise.all([questionPromise, answersPromise]).then((data) => {
    setQuestions(data[0]);
    setAnswers(data[1]);
});
};

return (
<>
<p>This is an App!! </p>
</>
);
};

export default MainContainer;
