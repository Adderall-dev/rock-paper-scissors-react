import React, { useState } from "react";
import "./App.css";
//components
import Header from "./components/Header";
import Score from "./components/Score";
import Message from "./components/Message";
//icons
import Paper from "./assets/papericon.png";
import Rock from "./assets/rockicon.png";
import Scissors from "./assets/scissorsicon.png";

function App() {
  const [score, setScore] = useState(() => 0);
  const [pcScore, setPcScore] = useState(() => 0);
  const [game, setGame] = useState("");

  const computerChoice = () => {
    let choices = ["r", "p", "s"];
    const pcChoice = Math.floor(Math.random() * 3);
    return choices[pcChoice];
  };

  const win = () => {
    setScore((prev) => prev + 1);
    setGame("true");
    console.log("win");
    console.log(score);
  };

  const loose = () => {
    setPcScore((prev) => prev + 1);
    setGame("false");
    console.log(pcScore);
    console.log("loose");
  };

  const draw = () => {
    console.log("draw");
    setGame("draw");
  };

  const resetGame = () => {
    setGame("");
    setScore(0);
    setPcScore(0);
  };

  const choiceSelection = (val) => () => {
    switch (val + computerChoice()) {
      case "pr":
      case "sp":
      case "rs":
        win();
        break;
      case "sr":
      case "ps":
      case "rp":
        loose();
        break;
      default:
        draw();
    }

    console.log("user: " + val);
    console.log("pc: " + computerChoice());
  };
  return (
    <>
      <Header />
      <Message game={game} />
      <div className="choice">
        <img src={Rock} alt="rock" onClick={choiceSelection("r")} />
        <img src={Paper} alt="paper" onClick={choiceSelection("p")} />
        <img src={Scissors} alt="scissors" onClick={choiceSelection("s")} />
        <Score score={score} pcScore={pcScore} />
        <button className="button" onClick={resetGame}>
          Start New Game
        </button>
      </div>
    </>
  );
}

export default App;
