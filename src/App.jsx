import React from "react";
import Timer from "./Timer";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
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
        <Typography variant="subtitle">
          <a target="_blank" href="https://www.facebook.com/tousif.tasrik">
            Follow me 👋
          </a>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid
          item
          sx={{ margin: "0 auto", mt: { lg: 2 }, mt: { xs: 5 } }}
          xs={8}
          sm={6}
          md={2}
          lg={2}
        >
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                30 minutes pomodoro 👀💐
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "500px",
          margin: "0 auto",
          mt: 18,
        }}
        className="main"
      >
        <Timer />
      </Box>
    </>
  );
};

export default App;
