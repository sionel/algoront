"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const timeStart = 0;
  const timeEnd = 15;
  const data = [
    [1, 4],
    [3, 5],
    [0, 6],
    [5, 7],
    [3, 8],
    [5, 9],
    [6, 10],
    [8, 11],
    [8, 12],
    [2, 13],
    [12, 14],
  ];
  return (
    <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
      <Table sx={{ minWidth: 650, border: 1 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Array(timeEnd + 1)
              .fill(0)
              .map((e, i) => {
                return i ? (
                  <TableCell key={i} align="left" sx={{ padding: 0 }}>
                    {i - 1}
                  </TableCell>
                ) : (
                  <TableCell key={i} align="center">
                    {"y\\x"}
                  </TableCell>
                );
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => {
            const [start, end] = row;
            return (
              <TableRow key={i}>
                {Array(timeEnd + 1)
                  .fill(0)
                  .map((e, j) => {
                    return j ? (
                      <TableCell
                        align="center"
                        className={`${
                          start + 1 <= j && end + 1 > j ? "processing" : ""
                        }`}
                        sx={{
                          bgcolor: "background.secondary",
                        }}
                        color={"secondary"}
                        key={j}></TableCell>
                    ) : (
                      <TableCell key={j} align="center">
                        {i}
                      </TableCell>
                    );
                  })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
