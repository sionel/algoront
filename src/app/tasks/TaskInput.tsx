import React from "react";
import { Container, Button, TextField, Box, Grid } from "@mui/material";
const TaskInput = () => {
  return (
    <Container>
      <Box sx={{ p: 5 }}>
        <form action="/api/task" method="POST">
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={10}>
              <TextField
                fullWidth
                margin="normal"
                name="title"
                variant="outlined"
                placeholder="할 일"
                color="primary"
              />
            </Grid>

            <Grid item xs={2}>
              <Button type="submit" variant="contained">
                전송
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default TaskInput;
