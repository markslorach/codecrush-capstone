import React, { useEffect, useState } from "react";
import QuestionBeginner from "../components/QuestionBeginner";
import Request from "../helpers/Request";
import QuestionList from "../components/QuestionList";

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
    <div>
    <p>This is an App!! </p>
    <QuestionList questions={questions} answers={answers}/>
    </div>
</>
);
};

export default MainContainer;
