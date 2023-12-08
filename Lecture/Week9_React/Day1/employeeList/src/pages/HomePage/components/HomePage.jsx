import Header from "./Header";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";
import Form from "./Form";
import Form2 from "./Form2";

export default function HomePage({apiData, setFilteredData, filteredData, addEmployee}) {


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
