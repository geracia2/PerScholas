import React from "react";

export default function Edit({ logsProp }) {
  return (
    <div>
      <form
        action={`/logs/${logsProp._id}?_method=PUT`}
        method="POST"
        id="post"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input type="text" name="title" placeholder="Title" defaultValue={logsProp.title} />
        <input type="text" name="entry" placeholder="Entry" defaultValue={logsProp.entry} />
        <label htmlFor="shipIsBroken">
          Is the ship broken?
          <input type="checkbox" name="shipIsBroken" defaultChecked={logsProp.shipIsBroken}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
