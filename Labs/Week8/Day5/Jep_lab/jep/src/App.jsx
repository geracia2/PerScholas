import { useState } from 'react'
import './App.css'

//  https://jservice.io/api/  for the api access
//  https://jservice.io/api/random will give a random question

function App() {
const [question, setQuestion] = useState(null)
const [answer, setAnswer] = useState('')

async function handleGetRequest(e){
  e.preventDefault();
  const response = await fetch(`https://jservice.io/api/random`)
  const data = await response.json()
  setQuestion(data)
  console.log(data)
}

function handleAnswer(){
  setAnswer(question[0]?.answer)
}

  return (
    <div> 
      <h1>Welcome to Jeopardy!</h1>

      {/* <div><h2>Score:</h2> {}</div> */}

      {/* <button>Decrease</button> */}
      {/* <button>Increase</button> */}
      {/* <button>Reset</button> */}

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
