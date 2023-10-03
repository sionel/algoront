"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import InputGrid from "../components/InputGrid";
import Simulation from "./Simulation";
import { SHA256 } from "crypto-js";

const Baek1931 = () => {
  const [data, setdata] = useState({});
  const [testcase, setTestcase] = useState("");

  useEffect(() => {
    getTestcase(1);
  }, [testcase]);

  const getTestcase = (index: number) => {
    fetch(`/api/testcase/baek1931`, {
      method: "GET",
    })
      .then((e) => e.json())
      .then((list) => {
        setTestcase(list[0].case);
      });
  };

  const handleClickRun = (input: string) => {
    try {
      input = input
        .trim()
        .split("\n")
        .map((e) => e.trim())
        .join("\n");
      setTestcase(input);
      const { count, times } = convertInputToDataset(input);
      const result = solution(count, times);

      storeData(input);
      setdata({ count, times });
      return result + "";
    } catch (error) {
      return "입력값이 잘못되었습니다.";
    }
  };

  const storeData = (input: string) => {
    const hash = SHA256(input).toString();
    console.log(hash);
    
  };

  const convertInputToDataset = (input: string) => {
    const dataset = input.split("\n");
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

    for (let i = 0; i < count; i++) {
      const [start, end] = times[i];
      if (temp <= start) {
        result++;
        temp = end;
      }
    }

    return result;
  };
  return (
    <Container>
      <InputGrid
        questionId="baek1931"
        testcase={testcase}
        onClickRun={handleClickRun}
        solution={solution}
      />
      <Simulation data={data} />
      {/* {isError ? <Box>{""}</Box> : <Table></Table>} */}
    </Container>
  );
};

export default Baek1931;
