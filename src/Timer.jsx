import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";

const Timer = () => {
  const initialMinutes = 30;
  const initialSeconds = 0;

  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        if (seconds === 0) {
          clearInterval(interval);

          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = displayMessage ? 24 : 4;
            let seconds = 59;

            setSeconds(seconds);
            setMinutes(minutes);

            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    // Clear interval on component unmount or when paused
    return () => clearInterval(interval);
  }, [seconds, isPaused, displayMessage]);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handleStart = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsPaused(true);
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
    setDisplayMessage(false);
  };

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div>
      {displayMessage && (
        <Typography variant="h4" sx={{ mb: 5 }}>
          Break Time! New session starts in:{" "}
        </Typography>
      )}
      <Typography variant="h1">
        {timerMinutes} : {timerSeconds}
      </Typography>
      <Button onClick={isPaused ? handleStart : handlePause}>
        {isPaused ? "Start" : "Pause"}
      </Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

export default Timer;
