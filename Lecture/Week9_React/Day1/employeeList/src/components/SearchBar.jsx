import { useState } from "react";

export default function SearchBar({ employee, setFilteredData }) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    let filteredEmployees = employee.filter((emp) =>{
      if(
        emp.first_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        emp.last_name.toLowerCase().includes(e.target.value.toLowerCase())
      ){
        return true
      } else if (e.target.value == null) {
        return true}
    })
    setInput(e.target.value); // g or ge
    setFilteredData(filteredEmployees); // input is not updated yet
    if (e.target.value === null || e.target.value === ''){
      setFilteredData(null)
    }
  }
  // console.log('input:')
  // console.log(input)

  // console.log(filteredEmployees);

  return (
    <div className="search">
      <input value={input} onChange={handleChange}></input>
    </div>
  );
}
