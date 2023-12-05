import { useState } from "react";
import "./App.css";
import GetAllStarships from "./services/sw-api";
import StarShipCard from "./components/StarShipCard";

function App() {
  const [apiData, setApiData] = useState(null);

  return (
    <>
      <GetAllStarships setApiData={setApiData} />
      {apiData && apiData.map((ship, index) => <StarShipCard key={index} ship={ship} />)}
    </>
  );
}

export default App;
