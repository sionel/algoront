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
  id: string;
}

const CaseDialog: React.FC<CaseDialogProps> = ({ onCloseDialog, id }) => {
  const [list, setList] = useState<ClientTestcase[]>();

  const getTestcaseList = (id: string) => {
    fetch(`/api/testcase/${id}`)
      .then((e) => e.json())
      .then((data: ClientTestcase[]) => setList(data));
  };

  useEffect(() => {
    getTestcaseList(id);
  }, [id]);
  const handleToggleLike = (id) => {
    // 좋아요 토글 로직
  };

  const handleSelect = (id) => {
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
            {list.map((data) => (
              <TableRow key={data._id}>
                <TableCell>
                  <IconButton onClick={() => handleToggleLike(data._id)}>
                    {data.like > 0 ? <StarIcon /> : <StarBorderIcon />}
                  </IconButton>
                  {data.like}
                </TableCell>
                <TableCell>{data.case}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleSelect(data._id)}>
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
