"use client";
import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const CommentForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");
  const [isErrors, setIsErrors] = useState(false);
  const pathname = usePathname();

  const router = useRouter();
  const validate = () => {
    if (username && password && comment) return true;
    else {
      setIsErrors(true);
      setTimeout(() => {
        setIsErrors(false);
      }, 1000);
    }
  };

  const handleClickSubmit: React.FormEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();

    if (!validate()) return;

    const questionId = pathname.split("/")[2];
    fetch(`/api/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ questionId, username, password, text: comment }),
    }).then((e) => {
      if (e.status === 200) {
        console.log("123123");
        setUsername("");
        setPassword("");
        setComment("");
      } else {
        alert("서버 에러");
      }
    });
  };
  const handleClose = () => {
    setIsErrors(false);
  };
  return (
    <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
      <Grid item xs={6}>
        <TextField
          id="outlined-basic"
          label="ID"
          variant="outlined"
          fullWidth
          onChange={(e) => setUsername(e.target.value)}
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
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>
      <Grid item xs={10}>
        <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          variant="outlined"
          fullWidth
          onChange={(e) => setComment(e.target.value)}
        />
      </Grid>
      <Grid item xs={2} container alignItems="center">
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          onClick={handleClickSubmit}
        >
          등록
        </Button>
      </Grid>

      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isErrors}
        onClose={handleClose}
      >
        <Alert severity="error">This is an error message!</Alert>
      </Snackbar>
    </Grid>
  );
};

export default CommentForm;
