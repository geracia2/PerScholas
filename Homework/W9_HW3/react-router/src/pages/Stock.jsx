import React from "react";
import { useStockContext } from "../components/StockContextConatiner";
import { useParams } from "react-router-dom";

export default function Stock() {
  const { stocks } = useStockContext();
  const { symbol } = useParams();
  const [targetStock] = stocks.filter((stock) => stock.symbol == symbol);

  console.log(targetStock);
  
  return (
    <div>
      <div>{targetStock.name} | {targetStock.symbol}</div>
      <div>{targetStock.lastPrice + targetStock.change}</div>
      <div>{targetStock.high}</div>
      <div>{targetStock.low}</div>
      <div>{targetStock.open}</div>
    </div>
  );
}
