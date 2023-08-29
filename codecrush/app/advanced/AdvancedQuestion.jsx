async function getQuestions(){
    const res = await fetch('http://localhost:8080/api/questions')
    
    return res.json()
}

async function getAnswers(){
    const res = await fetch('http://localhost:8080/api/answers')

    return res.json()
}

export default async function AdvancedQuestion(){
    const questions = await getQuestions()
    const advancedQuestion = questions.filter((question) => {
        return(
        question.questionLevel === 3 && question.dayID === 1
        )
    })

    const answers = await getAnswers()
    const advancedAnswers = answers.filter((answer) => {
      return(
        answer.question.id === advancedQuestion[0].id
      )
    })

  return (
<>
    {advancedQuestion.map((question) => (
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
)
};
