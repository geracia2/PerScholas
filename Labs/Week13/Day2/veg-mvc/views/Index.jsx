import React from "react";

export default function Index({ items, nav }) {
  return (
    <div>
      <nav>
        <a href={`/${nav}/new`}>New {nav}</a>
      </nav>
      <h1>Index Page</h1>
      <ul>
        {items.map((vegetable, i) => (
          <li key={i}>
            The <a href={`/${nav}/${i}`}>{vegetable.name}</a> is {vegetable.color}{" "}
            <br></br>
            {vegetable.readyToEat ? `It is ready to eat` : `It is not ready to eat`}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
