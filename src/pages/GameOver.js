import React, { useEffect } from "react";
import { useScore } from "../contexts/ScoreContext";
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../styled/Navbar";

export default function GameOver() {
  const [score] = useScore();
  const navigate = useNavigate();

  useEffect(() => {
    if (score === -1) {
      navigate("/");
    }
  }, [navigate, score]);

  return (
    <div>
      <h1>Game Over</h1>
      <p>{score}</p>
      <StyledLink to="/">Go Home</StyledLink>
      <StyledLink to="/game">Play Again?</StyledLink>
    </div>
  );
}
