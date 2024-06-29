import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledGame,
  StyledScore,
  StyledTimer,
  StyledCharactor,
} from "../styled/Game";
import { Strong } from "../styled/Random";

export default function Game() {
  const [score, setScore] = useState(0);
  const MAX_SECONDS = 5;
  const [ms, setMs] = useState(0);
  const [seconds, setSeconds] = useState(MAX_SECONDS);

  const navigate = useNavigate();

  useEffect(() => {
    const currentTime = new Date();
    const interval = setInterval(() => updateTime(currentTime), 1);
    return () => clearInterval(interval);
  }, []);

  const updateTime = (startTime) => {
    const endTime = new Date();
    const msPassedStr = (endTime.getTime() - startTime.getTime()).toString();
    const formattedMsString = ("0000" + msPassedStr).slice(-5);
    // 00000 - first 2 are the seconds, last 3 are the ms that have passed
    const updateSeconds =
      MAX_SECONDS - parseInt(formattedMsString.substring(0, 2)) - 1;
    const updateMs =
      1000 -
      parseInt(formattedMsString.substring(formattedMsString.length - 3));
    setSeconds(addLeadingZeros(updateSeconds, 2));
    setMs(addLeadingZeros(updateMs, 3));
  };

  const addLeadingZeros = (num, length) => {
    let zeros = "";
    for (let i = 0; i < length; i++) {
      zeros += "0";
    }
    return (zeros + num).slice(-length);
  };

  useEffect(() => {
    if (seconds <= -1) {
      navigate("/gameOver");
    }
  }, [seconds, ms, navigate]);

  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>{score}</Strong>
      </StyledScore>
      <StyledCharactor>A</StyledCharactor>
      <StyledTimer>
        Time:{" "}
        <Strong>
          {seconds}: {ms}
        </Strong>
      </StyledTimer>
    </StyledGame>
  );
}
