import React, { useState } from "react";
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

interface CaseDialogProps {
  open: boolean;
  onCloseDialog: () => void;
  id: string;
}

const CaseDialog: React.FC<CaseDialogProps> = ({ open, onCloseDialog, id }) => {

  const [dataList, setDataList] = useState([{
    _id:'',
    like:1,
    case: JSON.stringify("29\n1 4\n3 5\n0 6\n5 7\n3 8\n5 9\n6 10\n8 11\n8 12\n2 13\n12 14\n12 14\n12 14\n12 14\n12 14\n12 14\n12 14\n12 14\n12 14\n12 14\n12 14\n12 14\n12 14\n12 14\n12 14\n12 14\n12 14\n12 14\n12 14"),
  },])

  const handleToggleLike = (id) => {
    // 좋아요 토글 로직
  };

  const handleSelect = (id) => {
    // 선택 버튼 클릭 로직
  };


  return (
    <Dialog open={open} onClose={onCloseDialog} maxWidth="md">
      <DialogTitle>케이스 목록</DialogTitle>
      <DialogContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{minWidth: 100}} >좋아요</TableCell>
              <TableCell sx={{minWidth: 400}} >케이스</TableCell>
              <TableCell sx={{minWidth: 100}} >좋아요 수</TableCell>
              <TableCell sx={{minWidth: 100}} >선택</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList.map((data) => (
              <TableRow key={data._id}>
                <TableCell>
                  <IconButton onClick={() => handleToggleLike(data._id)}>
                    {data.like > 0 ? <StarIcon /> : <StarBorderIcon />}
                  </IconButton>
                </TableCell>
                <TableCell>{data.case}</TableCell>
                <TableCell>{data.like}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleSelect(data._id)}
                  >
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
