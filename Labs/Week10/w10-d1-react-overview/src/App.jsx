/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Report from "./components/Report";
import {
  Typography,
  Container,
  Button,
  ButtonGroup,
  TextField,
  Grid,
} from "@mui/material";

const appToken = import.meta.env.VITE_APP_TOKEN;

function App() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState(10);
  const [borough, setBorough] = useState("BROOKLYN");
  let url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${borough}&$limit=${input}&$$app_token=${appToken}`;

  useEffect(() => {
    getApiData();
  }, [borough]);

  async function getApiData() {
    const promise = await fetch(url);
    const data = await promise.json();
    setData(data);
  }

  // console.log(data);

  // function handleClick(location) {
  //   switch (location) {
  //     case "BROOKLYN":
  //       setBorough(location);
  //       break;
  //     case "MANHATTAN":
  //       setBorough(location);
  //       break;
  //     case "QUEENS":
  //       setBorough(location);
  //       break;
  //     case "BRONX":
  //       setBorough(location);
  //       break;
  //     case "STATEN ISLAND":
  //       setBorough(location);
  //       break;
  //   }
  // }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" color="initial">
        What happened in {borough}?
      </Typography>
      <TextField
        sx={{ width: { xs: 1, md: 200 } }}
        id="reportNum"
        label="Number of reports"
        value={input}
        onChange={handleChange}
      />
      <ButtonGroup
        sx={{ m: 1 }}
        variant="contained"
        color="primary"
        aria-label=""
      >
        <Button onClick={() => setBorough("BROOKLYN")}>Brooklyn</Button>
        <Button onClick={() => setBorough("MANHATTAN")}>Manhattan</Button>
        <Button onClick={() => setBorough("QUEENS")}>Queens</Button>
        <Button onClick={() => setBorough("BRONX")}>Bronx</Button>
        <Button onClick={() => setBorough("STATEN ISLAND")}>
          Staten Island
        </Button>
      </ButtonGroup>

        {data &&
          data.map((incident, index) => {
            if (index < input) {
              return <Report key={incident.unique_key} incident={incident} />;
            }
          })}

    </Container>
  );
}

export default App;
