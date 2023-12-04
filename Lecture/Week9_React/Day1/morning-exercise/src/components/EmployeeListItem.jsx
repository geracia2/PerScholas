export default function EmployeeListItem({employee}) {
    return (
      <>
        <img className="imgStyling" src={employee.avatar} />
        <div className="flexStack">
          <div className="name">{employee.first_name} {employee.last_name}</div>
          <div className="email">{employee.email}</div>
        </div>
      </>
    );
  }
  