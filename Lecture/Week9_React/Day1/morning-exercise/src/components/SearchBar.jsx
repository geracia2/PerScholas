import { useState } from "react";

export default function SearchBar({ employee, setFilteredData }) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
    setFilteredData(filteredEmployees);
    if (input === null || input === ''){
      setFilteredData(null)
    }
    // console.log(input)
  }
  console.log('input:')
  console.log(input)

  let filteredEmployees = employee.filter((emp) =>{
    if(
      emp.first_name.toLowerCase().includes(input.toLowerCase()) ||
      emp.last_name.toLowerCase().includes(input.toLowerCase())
    ){
      return true
    } else if (input == null) {
      return true}
  })




  // console.log(filteredEmployees);

  return (
    <div className="search">
      <input value={input} onChange={handleChange}></input>
    </div>
  );
}
