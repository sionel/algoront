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

interface AlgorithmTableProps {
  data: any[];
  selected: number[];
  done: number[];
  processing: number[];
  error: number[];
  row: number;
  column: number;
}

const AlgorithmTable: React.FC<AlgorithmTableProps> = ({
  data,
  done,
  error,
  processing,
  selected,
  column,
  row,
}) => {
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
    return "default";
  };
  const getRowCellClass = (row: number) => {
    return "default";
  };
  const getTableCellClass = (row: number, col: number) => {
    return "selected";
  };
  return (
    <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
      <Table sx={{ border: 1 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Array(column + 1)
              .fill(0)
              .map((_, i) => {
                return i ? (
                  <TableCell
                    className={getClassName(0, i)}
                    key={i}
                    align="left"
                    sx={{ padding: 0 }}>
                    {i - 1}
                  </TableCell>
                ) : (
                  <TableCell
                    key={i}
                    className={getClassName(0, 0)}
                    align="center">
                    {"y\\x"}
                  </TableCell>
                );
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((_, i) => {
            return (
              <TableRow key={i}>
                {Array(column + 1)
                  .fill(0)
                  .map((e, j) => {
                    return j ? (
                      <TableCell
                        align="center"
                        className={getClassName(i + 1, j)}
                        color={"secondary"}
                        key={j}></TableCell>
                    ) : (
                      <TableCell
                        className={getClassName(i + 1, j)}
                        key={j}
                        align="center">
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
};

export default AlgorithmTable;
