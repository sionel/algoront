"use client";
import React from "react";
import { Container, List } from "@mui/material";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import { ClientTask } from "@/types";
interface TaskProps {
  tasks: ClientTask[];
}
const Task: React.FC<TaskProps> = ({ tasks }) => {
  
  return (
    <Container>
      <TaskInput />
      <List>
        {tasks.map((task, index) => (
          <TaskItem {...{ task }} key={index} />
        ))}
      </List>
    </Container>
  );
};

export default Task;
