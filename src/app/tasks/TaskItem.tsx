"use client";
import { ClientTask } from "@/types";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogTitle,
  ListItem,
  ListItemText,
} from "@mui/material";
import { ObjectId } from "mongodb";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";

interface TastItem {
  task: ClientTask;
}
const TaskItem: React.FC<TastItem> = ({ task: { id, isCheck, title } }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false)
  const handleCheck = () => {
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
  const handleClickDeleteBtn = () => {
    setIsOpen(true)

  }
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
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <ListItem>
      <Checkbox
        checked={isCheck}
        onChange={handleCheck}
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
        onClick={handleClickDeleteBtn}
      >
        <DeleteIcon />
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"삭제?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClickDelete}>삭제</Button>
          <Button onClick={handleClose} autoFocus>
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </ListItem>
  );
};

export default TaskItem;
