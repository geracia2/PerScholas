import React from "react";

export default function Edit({ item, index, nav }) {
  
  return (
    <div>
      <h1>Edit Page</h1>
      <form action={`/${nav}/${index}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={item.name} />
        <br /><br />
        Color: <input type="text" name="color" defaultValue={item.color} />
        <br /><br />
        Is Ready To Eat: <input type="checkbox" name="readyToEat" defaultChecked={item.readyToEat} />
        <br /><br />
        <button>Update {nav}</button>
      </form>
    </div>
  );
}

