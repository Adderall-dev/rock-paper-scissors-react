import React from "react";

function Message({ game }) {
  return (
    <div>
      {game === "" ? <h2>Start game by clicking on images!</h2> : null}
      {game === "win" ? <h2>You won</h2> : null}
      {game === "loose" ? <h2>You Lost</h2> : null}
      {game === "draw" ? <h2>Draw!</h2> : null}
    </div>
  );
}

export default Message;
