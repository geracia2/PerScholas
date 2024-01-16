import React, { Fragment } from "react";

// const pokemon = null

// RegEx
// look at all lowercase letters,
// look at all letters after ?! and space,
// look globally
const regEx = /(\b[a-z](?!\s))/g;
// how to use it
// __.replace(regEx, function(x){return x.toUpperCase();});

export default function Index({ pokemon }) {
  return (
    <>
      <h1>See all the Pokemon!</h1>
      {pokemon && (
        <ul>
          {pokemon.map((mon, i) => (
            <Fragment key={mon.name}>
              <li>
                <a href={`/pokemon/${i}`}>
                  {mon.name.replace(regEx, function (x) {
                    return x.toUpperCase();
                  })}
                </a>
              </li>
            </Fragment>
          ))}
        </ul>
      )}
      {!pokemon && (
        <>
          <h1>Oh no, where are the pokemon?</h1>
        </>
      )}
    </>
  );
}
