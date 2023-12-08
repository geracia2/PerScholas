import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


export default function Price() {
  // Our api key from coinapi.io
  let apiKey = import.meta.env.VITE_API_URL
  // Grabbing the Currency symbol from the URL Params
  
  // const params = useParams()
  // const symbol = params.symbol
  // useParams give us an object with a key of the url Parameter and the value of the passed parameter
  // so if the url is prices/btc, params.symbol = btc
  // the above two lines can be destruct to:
  let { symbol } = useParams()
  // const { dog } = useParams() // this needs to match what we have on app

  let navigate = useNavigate()

  // Using the other two variables to create our URL
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  //state to hold the coin data
  const [coin, setCoin] = useState({});

  //function to fetch coin data
  // useEffect to run getCoin when component mounts
  useEffect(() => {
    const getCoin = async () => {
      try{
        const response = await fetch(url);
        const data = await response.json();
        setCoin(data);
      } catch(e){
        console.error(e)
      }
    };
    getCoin();
  }, []);

  // console.log(symbol);

// loaded function for when data is fetched
const loaded = () => {
  return (
    <div onClick={()=> navigate('/')}>
      <h1>
        {coin.asset_id_base}/{coin.asset_id_quote}
      </h1>
      <h2>{coin.rate}</h2>
    </div>
  );
};

// Function for when data doesn't exist
const loading = () => {
  return <h1>Loading...</h1>;
};

// if coin has data, run the loaded function, otherwise, run loading
return coin && coin.rate ? loaded() : loading();
};
