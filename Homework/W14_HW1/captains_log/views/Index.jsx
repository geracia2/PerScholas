import React, { Fragment } from "react";

export default function Index({ logsProp }) {
  return (
    <>
      <h1>Index</h1>
      <a href="/logs/new">Create New Log</a>
      {logsProp && (
        <ul>
          {logsProp.map((log, i) => (
            <li key={i}>
              <a href={`/logs/${log._id}`}>{log.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
