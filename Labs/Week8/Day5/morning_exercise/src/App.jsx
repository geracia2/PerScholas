import './App.css'
import { useState } from 'react'
import { receipts } from './assets/receipts'
import ReceiptComp from './components/Receipt'

export default function App() {
  let [receipt, setReceipt] = useState(receipts)
  // console.log(receipt[1].person)

  // function handleDelete(e){
  //   const deleted = todos.filter((item)=> item.id !== id)
  //   setTodos(deleted)
  //   setReceipt(e.target.)
  // }

  return (
    <div>
      {receipt.map((receipt, index)=>(
        // if (reverse! paid(false)) ? True(make a component) : False(do nothing)
        // !receipt.paid ? <ReceiptComp receiptData={receipt} onClick={()=> handleDelete()} /> : null
        !receipt.paid ? <ReceiptComp receiptData={receipt} /> : null
      ))
      }
      
    </div>
  )
}

