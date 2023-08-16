"use client";
import React, { useState } from "react";
import Table from "../components/Table";
import { Button, Container, TextField } from "@mui/material";

const Baek1931 = () => {
  const [dataSet, setDataSet] = useState(
    "11\r1 4\r3 5\r0 6\r5 7\r3 8\r5 9\r6 10\r8 11\r8 12\r2 13\r12 14"
  );
  const handleChangeDataSet: React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }) => {
    setDataSet(target.value);
  };
  const handleClickRun = () => {
    checkValidInput();
  };
  const checkValidInput = () => {};
  return (
    <Container>
      <TextField
        id="outlined-multiline-static"
        label="입력"
        multiline
        value={dataSet}
        onChange={handleChangeDataSet}
      />
      <Button title="실행" onClick={handleClickRun} />
      <Table></Table>
    </Container>
  );
};

export default Baek1931;
