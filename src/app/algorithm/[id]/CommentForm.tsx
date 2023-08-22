import { Button, Grid, TextField } from "@mui/material";
import React from "react";

const CommentForm = () => {
  return (
    <form action="/api/comment" method="POST">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="ID"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={10}>
          <TextField
            id="outlined-multiline-static"
            label="Comment"
            multiline
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={2} container alignItems="center">
          <Button variant="contained" color="primary" type="submit" fullWidth>
            등록
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CommentForm;
