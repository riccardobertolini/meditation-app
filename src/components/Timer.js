import { CircledTimer, StartButton, ResetButton } from "./Timer.styles";
import React, {useEffect, useState} from "react";

const Timer = ({time}) => {
    const [timeLeft, setTimeLeft] = useState(0);
    const [timerStarted, setTimerStarted] = useState(false);
    const audio = new Audio("bell.mp3")
    
    const startTimer = () => {
        setTimerStarted(!timerStarted);
        audio.play();
    }

    const resetTimer = () => {
        setTimeLeft(0);
        setTimerStarted(false);
    }

    
  useEffect(
    () => {
      let timer = setTimeout(() => (timerStarted && timeLeft < 100) && setTimeLeft(timeLeft + 1), time);
      if(timeLeft === 100) {
        audio.play();
      }
      return () => {
        clearTimeout(timer);
      };
    },
  );

    return <CircledTimer percentuage={timeLeft}>
        <StartButton onClick={startTimer}>{timerStarted ? 'STOP' : 'START'}</StartButton>
        <ResetButton onClick={resetTimer}>RESET</ResetButton>
    </CircledTimer>
}

export default Timer;