import React from "react";
import { useStockContext } from "../components/StockContextConatiner";
import { Fragment } from "react";
import { Link } from "react-router-dom";


export default function Dashboard() {
  // access to the comp level stock context
  const { stocks } = useStockContext();
  console.log(stocks);
  return (
    <div>
      {stocks.map((stock, index) => (
        <Link to={`/stocks/${stock.symbol}`} key={index}>
          <h3>{stock.name} {stock.symbol}</h3>
          {/* change is last price - change,  new price - last price*/}
          <p>New Price: {stock.lastPrice + stock.change} </p>
          <p>Change %: {(stock.change / stock.lastPrice)*100}</p>
        </Link>
      ))}
    </div>
  );
}
