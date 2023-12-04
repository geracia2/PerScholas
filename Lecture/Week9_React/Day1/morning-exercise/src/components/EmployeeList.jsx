// import data from "../data";
import EmployeeListItem from "./EmployeeListItem";
import { useState } from "react";
import { useEffect } from "react";
// api: https://reqres.in/api/users?page

export default function EmployeeList() {

  let [apiData, setApiData] = useState(null);
  useEffect(() => {
    async function getApiData() {
      try {
        let response = await fetch("https://reqres.in/api/users?page");
        let data = await response.json();
        setApiData(data);
      } catch (error) {
        console.log(error);
      }
    }
    // call api function
    getApiData();
  }, []);

    return (
      <div className="employeeList">
        {apiData && console.log(apiData.data[0].first_name)}

        {apiData && 
        apiData.data.map((employee) => (
          <div className="employee" key={employee.id}>
            <EmployeeListItem employee={employee} />
          </div>
        ))}
      </div>
      // static list data 
      // <div className="employeeList">
      //   {data.map((employee, index) => (
      //     <div className="employee" key={employee.name + index}>
      //       <EmployeeListItem abc={employee} />
      //     </div>
      //   ))}
      // </div>
    );
  }

  