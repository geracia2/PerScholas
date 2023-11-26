import './App.css';

import { names, lastNames } from './data';
import Haiku from './Haiku';
import NameCallOut from './NameCallOut';
import { poem } from './poem';

// 1
const attendance = lastNames.map((last)=> `${last} is a student at Per Scholas`)
// console.log(attendance)

// 2.1
const concatNames = names.map((names, index)=> {
  return `${names} ${lastNames[index]} is a student at Per Scholas`
})
// console.log(concatNames)

// 2.2
const nameObjs = names.map((fn, index) => {
  return {name: fn, lastName: lastNames[index]} 
})
// console.log(nameObjs)

// 2.3
// function ranInt (){
//   return Math.floor(Math.random()* 20) + 1
// } 
function ranInt (max, min){
  return Math.floor(Math.random()* max) + min
} 
const nameKeyedObjs = names.map((fn, index) => {
  return {name: fn, lastName: lastNames[index], id: ranInt(20,1)} 
})
// console.log(nameKeyedObjs)

// 3.1
const filterNamesLetter = nameKeyedObjs.filter((value)=>{
  return value.name[0] == 'M';
});
// console.log(filterNamesLetter)

// 3.2
const filterNamesID = nameKeyedObjs.filter((value)=>{
  return value.id <= 10;
});
console.log(filterNamesID)


function App() {
  return (
    <div className="App">
      {filterNamesID.map((value)=>(
        <NameCallOut names={value} />
      ))}
      {/* {console.log(poem.lines[0])} */}
      <Haiku poem={poem} />
    </div>
  );
}

export default App;
