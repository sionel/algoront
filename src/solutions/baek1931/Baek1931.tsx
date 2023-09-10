"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import InputGrid from "../components/InputGrid";
import Simulation from "./Simulation";
import CaseDialog from "../components/CaseDialog";

const Baek1931 = () => {
  const [open, setOpen] = useState(false);
  const [data, setdata] = useState({});
  const [testcase, setTestcase] = useState("");
  

  useEffect(() => {
    getTestcase(1);
  }, [testcase]);


  const handleCloseDialog = () => {
    setOpen(false);
  };

  const getTestcase = (index: number) => {
    fetch(`/api/testcase/baek1931?index=1`, {
      method: "GET",
    })
      .then((e) => e.json())
      .then(({result}) => {
        setTestcase(result.case as string)
      });
  };

  const handleClickRun = (input: string) => {
    try {
      const { count, times } = convertTextToDataset(input);
      const result = solution(count, times);
      setdata({ count, times });
      return result + "";
    } catch (error) {
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
      <CaseDialog open={open} onCloseDialog={handleCloseDialog} />
      <InputGrid testcase={testcase} onClickRun={handleClickRun} />
      <Simulation data={data} />
      {/* {isError ? <Box>{""}</Box> : <Table></Table>} */}
    </Container>
  );
};

export default Baek1931;
