import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";

import {
  Star as StarIcon,
  StarBorder as StarBorderIcon,
} from "@mui/icons-material";
import { ApiTestcase, ClientTestcase, Testcase } from "@/types";
import { convertApiDataToClientData } from "@/util/database";

interface CaseDialogProps {
  onCloseDialog: () => void;
  questionId: string;
  testcaseList: undefined | ClientTestcase[];
}

const CaseDialog: React.FC<CaseDialogProps> = ({
  onCloseDialog,
  questionId,
  testcaseList,
}) => {
  // const [list, setList] = useState<ClientTestcase[]>([]);

  const getTestcase = () =>
    fetch(`/api/testcase/${questionId}/like`, {
      method: "PUT",
    });

  // useEffect(() => {
  //   getTestcaseList(id);
  // }, [id]);
  const handleToggleLike = (id: string) => {
    // FormData 객체 생성
    const formData = new FormData();
    formData.append("id", id);
    fetch(`/api/testcase/${questionId}/like`, {
      method: "PUT",
      body: formData,
    });
  };

  const handleSelect = (id: string) => {
    // 선택 버튼 클릭 로직
  };

  return (
    <Dialog open={true} onClose={onCloseDialog} maxWidth="md">
      <DialogTitle>케이스 목록</DialogTitle>
      <DialogContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ minWidth: 100 }}>
                좋아요
              </TableCell>
              <TableCell align="center" sx={{ minWidth: 400 }}>
                케이스
              </TableCell>
              <TableCell align="center" sx={{ minWidth: 100 }}>
                선택
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testcaseList?.map((data) => (
              <TableRow key={data.id}>
                <TableCell>
                  <IconButton onClick={() => handleToggleLike(data.id)}>
                    {data.like > 0 ? <StarIcon /> : <StarBorderIcon />}
                  </IconButton>
                  {data.like}
                </TableCell>
                <TableCell>{data.case}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleSelect(data.id)}>
                    선택
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};

export default CaseDialog;
