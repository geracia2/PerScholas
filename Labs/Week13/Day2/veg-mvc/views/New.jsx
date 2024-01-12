import React from "react";

export default function New() {
  return (
    <div>
      <h1>New Page</h1>
      <form action="/vegetables" method="POST">
        Name: <input type="text" name="name" />
        <br /><br />
        Color: <input type="text" name="color" />
        <br /><br />
        Is Ready To Eat: <input type="checkbox" name="readyToEat" />
        <br /><br />
        <button>Create vegetable</button>
      </form>
    </div>
  );
}

