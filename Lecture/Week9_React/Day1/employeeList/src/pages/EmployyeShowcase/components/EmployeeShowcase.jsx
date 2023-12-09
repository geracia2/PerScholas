import React from "react";
import { Link, useParams } from "react-router-dom";

export default function EmployeeShowcase({ apiData }) {
  // useParams is picking up :id  so to use it would be id.id or deconstruct to:
  const { id } = useParams();
  // filter returns an array, so we can destructure it with []
  const [soloedEmployee] = apiData.filter((emp) => emp.id == id);

  // console.log(apiData);
  // console.log(id);
  // console.log(soloedEmployee);

  return (
    <>
      <div>
        <Link to="/">
          <button className="submitBtn">&lt; Employee List</button>
        </Link>
      </div>
      {/* don't know why we need an extra . before employ avatar path but */}
      <div className="flex-row">
        <img className="imgStyling" src={`${soloedEmployee.avatar}`} />
        <div className="flexStack">
          <div className="name">{soloedEmployee.first_name} {soloedEmployee.last_name}</div>
          <div className="email">{soloedEmployee.email}</div>
        </div>
      </div>
    </>
  );
}
