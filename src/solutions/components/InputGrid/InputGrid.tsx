import { Container, IconButton, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

import {
  List as ListIcon,
  Star as StarIcon,
  PlayArrow as PlayArrowIcon,
} from "@mui/icons-material";
import CaseDialog from "../CaseDialog";

const InputGrid: React.FC<{
  questionId: string;
  testcase: string;
  onClickRun: (input: string) => string;
}> = ({ questionId, testcase, onClickRun }) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("0");
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setInput(testcase);
  }, [testcase]);

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleClickList = () => {
    setDialogOpen(true);
  };

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
      <CaseDialog
        open={dialogOpen}
        onCloseDialog={handleCloseDialog}
        id={"baek1931"}
      />
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <h3>테스트케이스</h3>
        </Grid>
        <Grid item>
          <IconButton
            color="primary"
            aria-label="목록 호출"
            onClick={handleClickList}>
            <ListIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            color="primary"
            aria-label="실행"
            onClick={handleClickRun}>
            <PlayArrowIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="즐겨찾기">
            <StarIcon />
          </IconButton>
        </Grid>
      </Grid>
      {/* <Grid container spacing={2} alignItems="center" mb={5}> */}
      <Grid item xs={5}>
        <TextField
          id="outlined-multiline-static"
          label="입력"
          multiline
          value={input}
          fullWidth
          onChange={handleChangeDataSet}
          maxRows={10}
        />
      </Grid>
      {/* </Grid> */}

      <Grid item xs={5} sx={{ marginTop: 5, marginBottom: 5 }}>
        <TextField
          id="outlined-multiline-static"
          label="출력"
          disabled={true}
          multiline
          value={output}
          fullWidth
          maxRows={10}
        />
      </Grid>
    </Container>
  );
};

export default InputGrid;
