import { useState } from "react";
import "./App.css";
import { GetAllStarships } from "./services/sw-api";
import StarShipCard from "./components/StarShipCard";
import Header from "./components/Header";
function App() {
  const [apiData, setApiData] = useState(null);

  return (
    <>
      {GetAllStarships(setApiData)}
      {/* <GetAllStarships setApiData={setApiData} /> */}
      <br />
      <Header />
      {apiData && (
        <div className="container">
          {apiData.map((ship, index) => (
            <StarShipCard key={index} ship={ship} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
