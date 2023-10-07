"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import InputGrid from "../components/InputGrid";
import Simulation from "./Simulation";
import { getLocalStorageItem } from "@/util/localStorage";
// import { SHA256 } from "crypto-js";

const Baek1931 = () => {
  const [data, setData] = useState({});

  const solution = (input: string) => {
    const convertInputToDataset = (input: string) => {
      const dataset = input.split("\n");
      let count = Number(dataset[0]);
      let times: any[] = [];

      if (count < 1 || count > 100000) throw "";
      for (let i = 1; i <= count; i++) {
        const [start, end] = dataset[i].split(" ").map(Number);
        times.push([start, end]);
      }
      return { count, times };
    };

    const { count, times } = convertInputToDataset(input);

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
      <InputGrid questionId="baek1931" setData={setData} solution={solution} />
      {/* <Simulation data={data} /> */}
      {/* {isError ? <Box>{""}</Box> : <Table></Table>} */}
    </Container>
  );
};

export default Baek1931;
