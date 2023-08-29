async function getQuestions(){
    const res = await fetch('http://localhost:8080/api/questions')
    
    return res.json()
}

async function getAnswers(){
    const res = await fetch('http://localhost:8080/api/answers')

    return res.json()
}

export default async function IntermediateQuestion(){
    const questions = await getQuestions()
    const intermediateQuestion = questions.filter((question) => {
        return(
        question.questionLevel === 2 && question.dayID === 1
        )
    })

    const answers = await getAnswers()
    const intermediateAnswers = answers.filter((answer) => {
      return(
        answer.question.id === intermediateQuestion[0].id
      )
    })

  return (
<>
    {intermediateQuestion.map((question) => (
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
)
};
