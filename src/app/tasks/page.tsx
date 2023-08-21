import React from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  TextField,
  Box,
  Grid,
  ListItemSecondaryAction,
  IconButton,
  Checkbox,
} from "@mui/material";
import { connectToDatabase, convertApiDataToClientData } from "@/util/database";
import { ClientTask, ApiTask } from "../../types";
import TaskItem from "./TaskItem";
import TaskInput from "./TaskInput";
import Task from "./Task";

const Tasks = async () => {
  let { db } = await connectToDatabase();
  let tasks: ClientTask[] = await db
    .collection<ApiTask>("tasks")
    .find()
    .toArray()
    .then((list) => list.map((task) => convertApiDataToClientData(task)));

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        이것저것 아이디어들
      </Typography>
      <Task tasks={tasks} />
    </Container>
  );
};

export default Tasks;
