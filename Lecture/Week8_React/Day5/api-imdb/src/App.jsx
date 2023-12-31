import { useState } from 'react'
// import './App.css'

  // Personal Key: 14ac4897
  // https://www.omdbapi.com/?apikey=[yourkey]&[site query]&[site query]
  // https://www.omdbapi.com/?apikey=14ac4897&t=dune&plot=full

function App() {
  let [input, setInput] = useState('')
  let [data, setData] = useState({})

  function handleChange(e) {
    setInput(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault() // don't refresh the page with a form submission

    // make a request to API for the title
    // https://www.omdbapi.com/?apikey=14ac4897&t={input}
    // const response = await fetch(`https://www.omdbapi.com/?apikey=14ac4897&t=${input}`)
    // console.log(response)
    // const data = await response.json()
    // console.log(data)
    // setData(data)

    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=14ac4897&t=${input}`)
      const data = await response.json()
      setData(data)
      console.log(data)
    } catch (error) {
      console.log(error.message)
      console.log(error)
    }
  }

  // let displayData;
  // if (data) {
  //   displayData= (
  //     <div>
  //         <h1>{data.Title}</h1>
  //         <h3>{data.Year}</h3>
  //         <h3>{data.Ratings?.[0].Value}</h3>
  //         <img src={data.Poster} />
  //       </div>
  //   )
  // }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button>Submit</button>
        <hr />
        {/* {displayData} */}
        {data && // truthy value, checking to see if you have data before rendering 
        <div>
          <h1>{data.Title}</h1>
          <h3>{data.Year}</h3>
          <h3>{data.Ratings?.[0].Value}</h3>
          <img src={data.Poster} />
        </div>
      }
      </form>
    </div>
  );
}

export default App
