import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CaseDialog = ({ open, onCloseDialog }) => {
  return (
    <Dialog open={open} onClose={onCloseDialog}>
      <DialogTitle>{"Dialog Title"}</DialogTitle>
      <DialogContent>
        <DialogContentText>Dialog Content Text</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseDialog} color="primary">
          Cancel
        </Button>
        <Button onClick={onCloseDialog} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CaseDialog;
