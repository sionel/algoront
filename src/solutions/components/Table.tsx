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
  const focus = [];
  const done = [];
  const focusColNumber = () => {
    return { color: "#f00", fontSize: 30 };
  };
  const getClassName = (row: number, col: number) => {
    row--, col--;
    if (row === -1 && col === -1) {
      return getCornerCellClass();
    } else if (row === -1) {
      return getColumnCellClass(col);
    } else if (col === -1) {
      return getRowCellClass(row);
    } else {
      return getTableCellClass(row, col);
    }
  };
  const getCornerCellClass = () => "default";
  const getColumnCellClass = (col: number) => {
    return "default selected";
  };
  const getRowCellClass = (row: number) => {
    return "";
  };
  const getTableCellClass = (row: number, col: number) => {
    return "selected";
  };
  return (
    <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
      <Table sx={{ border: 1 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Array(timeEnd + 1)
              .fill(0)
              .map((e, i) => {
                return i ? (
                  <TableCell
                    className={getClassName(0, i)}
                    key={i}
                    align="left"
                    sx={{ padding: 0 }}
                  >
                    {i - 1}
                  </TableCell>
                ) : (
                  <TableCell
                    key={i}
                    className={getClassName(0, 0)}
                    align="center"
                  >
                    {"y\\x"}
                  </TableCell>
                );
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => {
            return (
              <TableRow key={i}>
                {Array(timeEnd + 1)
                  .fill(0)
                  .map((e, j) => {
                    return j ? (
                      <TableCell
                        align="center"
                        className={getClassName(i, j)}
                        // className={`${
                        //   start + 1 <= j && end + 1 > j
                        //     ? "processing"
                        //     : "default"
                        // }`}
                        // sx={{
                        //   bgcolor: "background.secondary",
                        // }}
                        color={"secondary"}
                        key={j}
                      ></TableCell>
                    ) : (
                      <TableCell
                        className={getClassName(i, j)}
                        key={j}
                        align="center"
                      >
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
