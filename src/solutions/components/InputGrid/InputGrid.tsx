import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const InputGrid: React.FC<{ onClickRun: (input: string) => string }> = ({ onClickRun }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const handleChangeDataSet: React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }) => {
    setInput(target.value);
  };
  const handleClickRun = () => {
    const result = onClickRun(input)
    setOutput(result)
  }
  return (
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
  );
};

export default InputGrid;
