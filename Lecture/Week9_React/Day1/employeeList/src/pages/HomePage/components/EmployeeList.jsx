// import data from "../data";
import { Fragment } from "react";
import EmployeeListItem from "./EmployeeListItem";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EmployeeList({employee}) {

    return (
      <div className="employeeList">

        {employee.map((employee) => (
          <Link to={`/EmployeeShowcase/${employee.id}`} key={employee.id}>
            <EmployeeListItem employee={employee}  />
          </Link>
        ))}
        
      </div>
      // style={{backgroundColor: red}}
      // --------- static list data 
      // <div className="employeeList">
      //   {data.map((employee, index) => (
      //     <div className="employee" key={employee.name + index}>
      //       <EmployeeListItem abc={employee} />
      //     </div>
      //   ))}
      // </div>
    );
  }

  