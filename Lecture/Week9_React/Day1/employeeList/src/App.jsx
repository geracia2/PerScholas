import "./App.css";
import HomePage from "./pages/HomePage/components/HomePage";
import EmployeeShowcase from "./pages/EmployyeShowcase/components/EmployeeShowcase";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
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
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              apiData={apiData}
              setFilteredData={setFilteredData}
              filteredData={filteredData}
              addEmployee={addEmployee}
            />
          }
        />
        <Route path="/EmployeeShowcase/:id" element={<EmployeeShowcase apiData={apiData} />} />
      </Routes>
    </>
  );
}
