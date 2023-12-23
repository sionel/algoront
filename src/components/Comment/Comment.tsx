"use client";
import { ClientComment } from "@/types/database/comment";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Comment: React.FC<{ comment: ClientComment }> = ({
  comment: { id, username, text },
}) => {

  const pathname = usePathname();
  const router = useRouter();

  const handleClickDelete = () => {
    const questionId = pathname.split("/")[2];

    fetch(`/api/comment/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((e) => {
      if (e.status === 200) {
        router.refresh()
      } else {
        alert("서버 에러");
      }
    });
  };

  return (
    <Card variant="outlined" style={{ marginBottom: "16px" }}>
      <CardContent>
        <Grid
          container
          spacing={2}
          sx={{ marginBottom: "20px" }}
          alignItems={"center"}
        >
          <Grid item xs={3}>
            <Typography variant="overline" color="textSecondary">
              {"ID : "}
            </Typography>
            <Typography variant="overline" color="textSecondary">
              {username}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              fullWidth
              onChange={() => {}}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClickDelete}
            >
              Delete
            </Button>
          </Grid>
        </Grid>

        <Typography variant="h5" color="textSecondary" mb={5}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Comment;
