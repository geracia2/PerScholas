import Header from "./Header";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";
import Form from "./Form";
import Form2 from "./Form2";

import { useState } from "react";
import { useEffect } from "react";

export default function HomePage() {
  let [apiData, setApiData] = useState(null);
  let [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    async function getApiData() {
      try {
        let response = await fetch("https://reqres.in/api/users?page");
        let data = await response.json();
        setApiData(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getApiData();
  }, []);

  // function to update current list plus input
  function addEmployee(emp) {
    setApiData([...apiData, emp]);
  }

  // this will crash for inf. loop
  // function filterEmployee(search) {
  //   // setFilteredData(search)
  // }

// debugging logs
  // console.log("apiData:");
  // console.log(apiData);
  // console.log("filteredData:");
  // console.log(filteredData);
  
  return (
    <div id="home-page">
      <Header />
      {apiData && (<SearchBar employee={apiData} setFilteredData={setFilteredData} />)}
      {filteredData !== null ? <EmployeeList employee={filteredData} /> : apiData && <EmployeeList employee={apiData}  /> }
      {/* <Form addEmployee={addEmployee} /> */}
      <Form2 addEmployee={addEmployee} />
      
    </div>
  );
}
