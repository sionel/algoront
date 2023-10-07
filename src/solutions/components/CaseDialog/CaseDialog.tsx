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
  onCloseDialog: (id: number) => void;
  questionId: string;
  testcaseList: undefined | ClientTestcase[];
}

const CaseDialog: React.FC<CaseDialogProps> = ({
  onCloseDialog,
  questionId,
  testcaseList,
}) => {
  const getTestcase = () =>
    fetch(`/api/testcase/${questionId}/like`, {
      method: "PUT",
    });

  const handleToggleLike = (id: string) => {
    // FormData 객체 생성
    const formData = new FormData();
    formData.append("id", id);
    fetch(`/api/testcase/${questionId}/like`, {
      method: "PUT",
      body: formData,
    });
  };

  const handleSelect = (id: number) => {
    console.log(id);
    onCloseDialog(id);
  };

  return (
    <Dialog
      open={true}
      onClose={() => onCloseDialog(-1)}
      maxWidth="md"
      scroll="paper"
      sx={{ marginTop: 5 }}>
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
            {testcaseList?.map((data, idx) => (
              <TableRow key={data.id}>
                <TableCell align="center">{data.like}</TableCell>
                <TableCell align="left">{JSON.stringify(data.case)}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleSelect(idx)}>
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
