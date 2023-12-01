import { useState } from 'react'
import './App.css'

//  https://jservice.io/api/  for the api access
//  https://jservice.io/api/random will give a random question

function App() {
const [question, setQuestion] = useState(null)
const [answer, setAnswer] = useState('')
const [score, setScore] = useState(0)
const [reveal, setReveal] = useState(false)

async function handleGetRequest(e){
  e.preventDefault();
  const response = await fetch(`https://jservice.io/api/random`)
  const data = await response.json()
  setQuestion(data)
  console.log(data)
}

function handleAnswer(){
  setReveal(!reveal)
  if (reveal == false){
    setAnswer(question[0]?.answer)
  } else {
    setAnswer('')
  }
}

  return (
    <div> 
      <h1>Welcome to Jeopardy!</h1>
      {question && 
      <>
        <div><h2>Score: {score}</h2> </div>
        <button onClick={()=> setScore((a)=> a - question[0]?.value)}>Decrease</button>
        <button onClick={()=> setScore((a)=> a + question[0]?.value)}>Increase</button>
        <button onClick={()=> setScore(0)}>Reset</button>
      </>
      }
      <h2>Let's play!</h2>
      <button onClick={handleGetRequest}>Random Trivia Question</button>

      {question && // to do this trick we need our initial state to be a null
      <div>
        <div><h3>Category: </h3>{question[0]?.category.title}</div>
        <div><h3>Points:</h3> {question[0]?.value}</div>
        <div><h3>Question:</h3> {question[0]?.question}</div>
        {/* <div><h3>Answer:</h3> {question[0]?.answer}</div> */}
      </div>
      }

      {question && 
      <button onClick={handleAnswer}>Click to Reveal Answer</button>
      }
      <div>{answer}</div>
    </div>
  )
}

export default App
