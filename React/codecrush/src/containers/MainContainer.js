import React, { useEffect, useState } from "react";
import Request from "../helpers/Request";

const MainContainer = () => {
const [questions, setQuestions] = useState([]);
const [answers, setAnswers] = useState([]);

useEffect(() => {
const getData = () => {
const request = new Request();
const questionPromise = request.get("/api/questions");
const answersPromise = request.get("/api/answers");
Promise.all([questionPromise, answersPromise]).then((data) => {
    setQuestions(data[0]);
    setAnswers(data[1]);
});
};

getData();
}, []);

return (
<p>hello</p>
);
};

export default MainContainer;
