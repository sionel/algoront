import { Container, IconButton, Button, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  List as ListIcon,
  Star as StarIcon,
  StarBorder as StarBorderIcon,
  PlayArrow as PlayArrowIcon,
} from "@mui/icons-material";
import CaseDialog from "../CaseDialog";
import { useQuery } from "@tanstack/react-query";
import { ClientTestcase } from "@/types";
import { getLocalStorageItem } from "@/util/localStorage";

const InputGrid: React.FC<{
  questionId: string;
  solution: (input: string) => any;
  setData: (data: any) => void;
}> = ({ questionId, setData, solution }) => {
  const [localStorageItem, setLocalStorageItem] = useState<any>({});
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("0");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [likeFlag, setLikeFlag] = useState(false);
  const getTestcase = () =>
    fetch(`/api/testcase/${questionId}`, {
      method: "GET",
    })
      .then((e) => e.json())
      .then((list) => {
        console.log(list);
        return list;
      });

  const { data, isError } = useQuery<ClientTestcase[]>({
    queryKey: ["testcase-list", questionId],
    queryFn: getTestcase,
  });

  useEffect(() => {
    const localStorageItem = getLocalStorageItem(questionId);
    setLocalStorageItem(localStorageItem);
  }, [questionId]);

  useEffect(() => {
    if (data) setInput(data[0].case);
  }, [data]);

  const handleCloseDialog = (id: number) => {
    setDialogOpen(false);
    data && id !== -1 && setInput(data[id].case);
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
    const trimmedInput = input
      .trim()
      .split("\n")
      .map((e) => e.trim())
      .join("\n");

    const result = solution(trimmedInput);
    setOutput(result);
  };

  const handleClickLike = () => {};
  return (
    <Container>
      {dialogOpen && (
        <CaseDialog
          onCloseDialog={handleCloseDialog}
          questionId={questionId}
          testcaseList={data}
        />
      )}
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
          <IconButton aria-label="좋아요" onClick={handleClickLike}>
            {!likeFlag ? <StarIcon color="warning" /> : <StarBorderIcon />}
          </IconButton>
        </Grid>
      </Grid>
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
