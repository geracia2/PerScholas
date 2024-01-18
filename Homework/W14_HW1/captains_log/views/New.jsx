import React from "react";

export default function () {
  return (
    <div>
      <form
        action="/logs"
        method="POST"
        id="create"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          // flexWrap: "wrap",
        }}
      >
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="entry" placeholder="Entry" />
        <label htmlFor="shipIsBroken">
          Is the ship broken?
          <input type="checkbox" name="shipIsBroken" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
