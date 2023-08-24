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
} from "@mui/material";

const Baek1931 = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const [isError, setIsError] = useState(false);
  const handleChangeDataSet: React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }) => {
    setInput(target.value);
  };
  const handleClickRun = () => {
    try {
      const { count, times } = convertTextToDataset();
      const result = solution(count, times);
      setOutput(result+"");
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setOutput("입력값이 잘못되었습니다.");

    }
  };

  const convertTextToDataset = () => {
    let count: number = 0;
    let times: any[] = [];
    const dataset = input.trim().replaceAll("\r", "").split("\n");
    
    count = Number(dataset[0]);
    console.log(dataset);

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
      <Grid container spacing={2} alignItems="center" mb={5}>
        <Grid item xs={5}>
          <TextField
            id="outlined-multiline-static"
            label="입력"
            multiline
            value={input}
            fullWidth
            onChange={handleChangeDataSet}
          />
        </Grid>
        <Grid item xs={2}>
          <Button onClick={handleClickRun} variant={"contained"} fullWidth>
            실행
          </Button>
        </Grid>
        <Grid item xs={5}>
          <TextField
            id="outlined-multiline-static"
            label="출력"
            disabled={true}
            multiline
            value={output}
            fullWidth
            
          />
        </Grid>
      </Grid>
      {isError ? <></> : <Table></Table>}
    </Container>
  );
};

export default Baek1931;
