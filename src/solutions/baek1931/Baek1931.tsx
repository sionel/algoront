"use client";
import React, { useState } from "react";
import Table from "../components/Table";
import {
  Grid,
  Typography,
  Button,
  Container,
  TextField,
  Paper,
  Box,
} from "@mui/material";
import InputGrid from "../components/InputGrid";
import Simulation from "./Simulation";

const Baek1931 = () => {
  const [isError, setIsError] = useState(true);
  const [data, setdata] = useState({})
  const handleClickRun = (input: string) => {
    try {
      const { count, times } = convertTextToDataset(input);
      const result = solution(count, times);
      setdata({count , times})
      setIsError(false);
      return result + "";
    } catch (error) {
      setIsError(true);
      return "입력값이 잘못되었습니다.";
    }
  };

  const convertTextToDataset = (input: string) => {
    const dataset = input.trim().replaceAll("\r", "").split("\n");
    let count = Number(dataset[0]);
    let times: any[] = [];

    if (count < 1 || count > 100000) throw "";
    for (let i = 1; i <= count; i++) {
      const [start, end] = dataset[i].split(" ");
      times.push([start, end]);
    }
    return { count, times };
  };

  const solution = (count: number, times: number[][]) => {
    times.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
    let temp = 0;
    let result = 0;
    times.forEach((e) => {
      const [start, end] = e;
      if (temp <= start) {
        result++;
        temp = end;
      }
    });

    return result;
  };
  return (
    <Container>
      <InputGrid onClickRun={handleClickRun} />
      <Simulation data={data} />
      {/* {isError ? <Box>{""}</Box> : <Table></Table>} */}
    </Container>
  );
};

export default Baek1931;
