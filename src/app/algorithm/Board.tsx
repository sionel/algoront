"use client";
import React, { useEffect, useState } from "react";
import MarkDownPost from "./components/MarkDownPost";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { Post } from "./type";

interface BoardProps {
  list: Post[];
}

const Board: React.FC<BoardProps> = ({ list }) => {
  const [page, setPage] = useState(0);
  const router = useRouter();
  const [rows, setRows] = useState<Post[]>([]);

  useEffect(() => {
    const rows = list.slice(page, page + 10);
    setRows(rows);
  }, [page, list]);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ width: "10%" }}>
                Index
              </TableCell>
              <TableCell align="center" sx={{ width: "20%" }}>
                Sources
              </TableCell>
              <TableCell align="center" sx={{ width: "50%" }}>
                Title
              </TableCell>
              <TableCell align="center" sx={{ width: "20%" }}>
                Difficulty
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <TableRow
                key={row._id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
                onClick={() => {
                  router.push(`/algorithm/${row.path}`);
                }}
              >
                <TableCell align="center">{row.index}</TableCell>
                <TableCell align="center">{row.source}</TableCell>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="center">{row.difficulty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={list.length}
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
      />
    </Box>
  );
};

export default Board;
