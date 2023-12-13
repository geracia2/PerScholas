import { useState, useEffect } from "react";
import "./App.css";

// list of things we need to do:
//  use a text field, button, input and cardNum state
//  cardNum saved to array
//  looping over array:
//    starting at .length
//    go till i[0]
//    decrement by i - 2
//      take i*2

// use at the end(FinalSum.from(combinedArr, (x) => x + x));

function App() {
  const [cardNum, setCardNum] = useState(0);
  let [input, setInput] = useState(0);

//   we can probably do it ALL in the array from for step one now that I'm looking at this, mena's a beast
// console.log(Array.from([1, 2, 3], (x) => x + x));
// // Expected output: Array [2, 4, 6]
// the array.from method lets us run an arrow function on each index
// so we can just do the logic there

  // useEffect
  // 3 checks

  // starting at arr[arr.length -1]
  // dec by -2
  // newArr = double digit
  // step 2 =  sum all digits in arr

  // var cardNum = []

  useEffect(() => {
    // change card to something we can loop over
    let cardNumToArr = Array.from(cardNum);
    // even card number doubled array
    let times2 = [];
    // original card array with doubled integers
    let alteredCardNum = []

    
    console.log(`Card Array: `);
    console.log(cardNumToArr);
    
    for (let i = cardNumToArr.length-1; i >= 0; i = i--) {
      if (i % 2 === 0 ){
        // push into the sum array
        times2.push(cardNumToArr[i] * 2)
        // we have the doubled array now
      } 
      // // push into the sum array
      // times2.push(cardNumToArr[i] * 2)
      // // we have the doubled array now
      // for (let j = 0; j < cardNumToArr.length; j++) {
      }
    
    
    
        
        console.log(`Summ push: `)
        console.log(times2)
      }, [cardNum]);
      
  return (
    <>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setCardNum(input)}>Submit</button>
    </>
  );
}

export default App;
