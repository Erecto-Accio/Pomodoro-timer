import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import sound from "./Assets/notification-sound.mp3";

const Timer = () => {
  const initialMinutes = 30;
  const initialSeconds = 0;

  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [soundPlayed, setSoundPlayed] = useState(false);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            if (!soundPlayed) {
              new Audio(sound).play();
              setSoundPlayed(true);
            }
            setDisplayMessage((prev) => !prev);
            setMinutes(displayMessage ? 24 : 4);
            setSeconds(59);
            setSoundPlayed(false); // Reset for the next session
          } else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [seconds, isPaused, minutes, displayMessage, soundPlayed]);

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
