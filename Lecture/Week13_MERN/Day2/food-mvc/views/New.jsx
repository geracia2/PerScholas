import React from "react";

export default function New({ fruits }) {
  return (
    <div>
      <h1>New Fruit page</h1>
      {/* NOTE: action will be the route, method will be the HTTP verb */}
      <form
        // form will reload the page, so we don't do the prevent.default
        // where, send this request to
        action="/fruits"
        // how, must have a post rout on sever page
        method="POST"
      >
        {/* key: name, value: type and input */}
        Name: <input type="text" name="name" />
        <br />
        <br />
        Color: <input type="text" name="color" />
        <br />
        <br />
        Is Ready To Eat: <input type="checkbox" name="readyToEat" />
        <br />
        <br />
        <input type="submit" name="" value="Create Fruit" />
      </form>
    </div>
  );
}
