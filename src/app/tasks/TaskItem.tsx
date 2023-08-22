"use client";
import { ClientTask } from "@/types";
import {
  Button,
  Checkbox,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { ObjectId } from "mongodb";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";

interface TastItem {
  task: ClientTask;
}
const TaskItem: React.FC<TastItem> = ({ task: { id, isCheck, title } }) => {
  const router = useRouter();
  const handleCheckChange = () => {
    fetch(`/api/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCheck: !isCheck }),
    }).then((e) => {

      if (e.status === 200) {
        router.refresh();
      } else {
        alert("서버 에러");
      }
    });
  };
  const handleClickDelete = () => {
    fetch(`/api/task/${id}`, {
      method: "DELETE",
    }).then((e) => {
      if (e.status === 200) {
        router.refresh();
      } else {
        alert("서버 에러");
      }
    });
  };
  return (
    <ListItem>
      <Checkbox
        checked={isCheck}
        onChange={handleCheckChange}
        color="primary"
      />
      <ListItemText
        primary={title}
        style={{ textDecoration: isCheck ? "line-through" : "none" }}
      />
      <Button
        type="submit"
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
        }}
        onClick={handleClickDelete}
      >
        <DeleteIcon />
      </Button>
    </ListItem>
  );
};

export default TaskItem;
