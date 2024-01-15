import React, { Fragment } from "react";

const inLineStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};
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
      {console.log(Array.from({ length: 1 }))}
      <h1 style={inLineStyle}>See all the Pokemon!</h1>
      {pokemon && (
        <ul>
          {pokemon.map((mon, i) => (
            <Fragment key={mon.name}>
              <li>
                {mon.name.replace(regEx, function (x) {
                  return x.toUpperCase();
                })}
                <ul>
                  <li>
                    {/* <img src={`${mon.img}.jpg`} alt="" /> */}
                    {mon.name}
                  </li>
                </ul>
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
