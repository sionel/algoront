import { ClientComment } from "@/types/comment";
import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Comment: React.FC<{ comment: ClientComment }> = ({
  comment: { id, pw, text },
}) => {
  return (
    <Card variant="outlined" style={{ marginBottom: "16px" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {id}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {text}
        </Typography>
        <Button variant="contained" color="secondary" onClick={()=>{}}>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default Comment;
