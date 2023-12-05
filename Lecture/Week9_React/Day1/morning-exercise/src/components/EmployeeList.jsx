// import data from "../data";
import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList({employee}) {

    return (
      <div className="employeeList">

        {employee.map((employee) => (
          <div className="employee" key={employee.id}>
            <EmployeeListItem employee={employee} />
          </div>
        ))}
        
      </div>
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

  