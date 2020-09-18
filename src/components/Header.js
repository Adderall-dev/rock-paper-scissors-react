import React from "react";
import PC from "../assets/computer.png";

function Header() {
  return (
    <div className="header">
      <h1>Rock paper scissors</h1>
      <h2>
        Play with <img src={PC} alt="pc" />
      </h2>
    </div>
  );
}

export default Header;
