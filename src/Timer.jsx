import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
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

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [seconds]);

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
    </div>
  );
};

export default Timer;
