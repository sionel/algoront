"use client";
import React, { useEffect, useState } from "react";
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
import { ClientPost, Post } from "../../types/post";

interface BoardProps {
  posts: ClientPost[];
}

const Board: React.FC<BoardProps> = ({ posts }) => {
  const [page, setPage] = useState(0);
  const router = useRouter();
  const [rows, setRows] = useState<Post[]>([]);

  useEffect(() => {
    const rows = posts.slice(page, page + 10);
    setRows(rows);
  }, [page, posts]);

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
            {posts.map((post) => (
              <TableRow
                key={post.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  cursor: "pointer",
                }}
                onClick={() => {
                  router.push(`/algorithm/${post.path}`);
                }}
              >
                <TableCell align="center">{post.index}</TableCell>
                <TableCell align="center">{post.source}</TableCell>
                <TableCell component="th" scope="row">
                  {post.title}
                </TableCell>
                <TableCell align="center">{post.difficulty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={posts.length}
        rowsPerPage={10}
        page={page}
        onPageChange={handleChangePage}
      />
    </Box>
  );
};

export default Board;
