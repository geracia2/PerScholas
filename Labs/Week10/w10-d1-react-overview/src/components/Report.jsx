/* eslint-disable react/prop-types */
import { useState } from "react";

const Report = ({ incident }) => {
  const [policeReport, setPoliceReport] = useState(false);

  function handleToggle() {
    setPoliceReport(!policeReport);
  }
  return (
    <div>
      <div key={incident.unique_key}>
        <p>{incident.descriptor}</p>
        <button onClick={handleToggle}>WHAT DID THE POLICE DO?</button>
        {policeReport && <p>{incident.resolution_description}</p>}
      </div>
    </div>
  );
};

export default Report;
