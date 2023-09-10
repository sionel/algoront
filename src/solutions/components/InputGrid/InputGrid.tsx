import { Container, IconButton, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

import {
  List as ListIcon,
  Star as StarIcon,
  PlayArrow as PlayArrowIcon,
} from "@mui/icons-material";

const InputGrid: React.FC<{
  testcase: string;
  onClickRun: (input: string) => string;
  onClickList : () => void
}> = ({ testcase, onClickRun,onClickList }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("0");

  useEffect(() => {
    setInput(testcase);
  }, [testcase]);

  const handleChangeDataSet: React.ChangeEventHandler<HTMLTextAreaElement> = ({
    target,
  }) => {
    setInput(target.value);
  };
  const handleClickRun = () => {
    const result = onClickRun(input);
    setOutput(result);
  };
  return (
    <Container>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <h3>테스트케이스</h3>
        </Grid>
        <Grid item>
          <IconButton color="primary" aria-label="목록 호출" onClick={onClickList}>
            <ListIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="primary" aria-label="실행" onClick={handleClickRun}>
            <PlayArrowIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="즐겨찾기">
            <StarIcon />
          </IconButton>
        </Grid>
      </Grid>
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
    </Container>
  );
};

export default InputGrid;
