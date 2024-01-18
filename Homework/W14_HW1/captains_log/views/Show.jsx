import React from "react";

export default function Show({ logsProp }) {
  return (
    <div>
      <h1>Show</h1>
      <a href="/logs">Back to Index</a>
      <p>{logsProp.title}</p>
      <p>{logsProp.entry}</p>
      <p>Is the ship broken? {logsProp.shipIsBroken === true ? "No" : "Yes"}</p>
      <form action={`/logs/${logsProp._id}?_method=DELETE`} method="POST">
        <button>Delete</button>
      </form>
    </div>
  );
}
