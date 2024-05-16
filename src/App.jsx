import React from "react";
import Timer from "./Timer";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Facebook } from "@mui/icons-material";

const App = () => {
  return (
    <>
      {" "}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        {" "}
        <Typography variant="subtitle">Made by Tousif Tasrik 💗</Typography>
        <Typography variant="subtitle">Follow me</Typography>
      </Box>
      <Card sx={{ margin: "0 auto", mt: 2, width: "250px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            25 minutes pomodoro 👀💐
          </Typography>
        </CardContent>
      </Card>
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "500px",
          margin: "0 auto",
          mt: 30,
        }}
        className="main"
      >
        <Timer />
      </Box>
    </>
  );
};

export default App;
