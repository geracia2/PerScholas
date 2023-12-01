
export default function ReceiptComp({receiptData}) {
    // person, order, main, protein, rice, sauce, drink, cost, AND toppings 
    // console.log(receiptData[1].person)

    function display(params) {
        
    }
    return (
    <div className="container">
        {/* {receipt.paid === false ? true_value : false_value } */}
        {/* {receiptData.map((receipt, index)=>(
            <div key={crypto.randomUUID()} className='flexItem'>
                <h3>{receipt.person}</h3>
                <p><strong>Main:</strong>       {receipt.order.main}</p>
                <p><strong>Protein:</strong>    {receipt.order.protein}</p>
                <p><strong>Rice:</strong>       {receipt.order.rice}</p>
                <p><strong>Sauce:</strong>      {receipt.order.sauce}</p>
                <p><strong>Toppings:</strong>   {receipt.order.toppings}</p>
                <p><strong>Drink:</strong>      {receipt.order.drink}</p>
                <p><strong>Cost:</strong>       {receipt.order.cost}</p>
                <h3>Paid: {receipt.paid.toString()}</h3>
            </div>
        ))
        } */}
        
            <div className='flexItem'>
                <h3>{receiptData.person}</h3>
                <p><strong>Main:</strong>       {receiptData.order.main}</p>
                <p><strong>Protein:</strong>    {receiptData.order.protein}</p>
                <p><strong>Rice:</strong>       {receiptData.order.rice}</p>
                <p><strong>Sauce:</strong>      {receiptData.order.sauce}</p>
                <p><strong>Toppings:</strong>   {receiptData.order.toppings}</p>
                <p><strong>Drink:</strong>      {receiptData.order.drink}</p>
                <p><strong>Cost:</strong>       {receiptData.order.cost}</p>
                <h3>Paid: {receiptData.paid.toString()}</h3>
            </div>
    </div>
    );
}

