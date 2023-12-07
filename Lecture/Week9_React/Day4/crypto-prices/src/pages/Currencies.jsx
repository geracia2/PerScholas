import { Link } from "react-router-dom";

export default function Currencies () {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  return (
    <div className="currencies">
      {currencies.map((coin) => {
        // destruct coin from the .map param
        const { name, symbol } = coin;

        return (
          // wrapping in {``} to allow for dynamics
          // the symbol here is the argument
          // we are generating these links
          // they do not exist yet, the page will be created dynamically by the skeleton of price
          <Link key={symbol} to={`/price/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
};