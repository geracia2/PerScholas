import React from "react";

export default function Index({ fruits }) {
  return (
    <div>
      <nav>
        <a href="/fruits/new">Create a New Fruit</a>
      </nav>
      <h1>Index Page</h1>
      <ul>
        {fruits.map((fruit, i) => (
          <li key={fruit.name}>
            The <a href={`/fruits/${i}`}>{fruit.name}</a> is {fruit.color}{" "}
            <br></br>
            {fruit.readyToEat 
            ? `It is ready to eat` // true
            : `It is not ready to eat` // false
            } 
            <br />
            <a href={`/fruits/${i}/edit`}>Edit</a>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
