// import data from "../data";
import { Fragment } from "react";
import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList({employee}) {

    return (
      <div className="employeeList">

        {employee.map((employee) => (
          <Fragment key={employee.id}>
            <EmployeeListItem employee={employee}  />
          </Fragment>
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

  