import React from "react";

function Score({ score, pcScore }) {
  return (
    <>
      <div className="score">
        <h1>user: {score}</h1>
        <h1>computer: {pcScore}</h1>
      </div>
    </>
  );
}

export default Score;
