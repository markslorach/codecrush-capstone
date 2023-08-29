async function getQuestions() {
  const res = await fetch("http://localhost:8082/api/questions");

  return res.json();
}

async function getAnswers() {
  const res = await fetch("http://localhost:8082/api/answers");

  return res.json();
}

export default async function BeginnerQuestion() {
  const now = new Date();
  const day = now.getDay();
  console.log(day);
  const questions = await getQuestions();
  const beginnerQuestion = questions.filter((question) => {
    return question.questionLevel === 1 && question.dayID === day
  });

  console.log(day);

  const answers = await getAnswers();
  const beginnerAnswers = answers.filter((answer) => {
    return answer.question.id === beginnerQuestion[0].id;
  });

  return (
    <>
      {beginnerQuestion.map((question) => (
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
