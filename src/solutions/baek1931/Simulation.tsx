import React, { useEffect, useState } from "react";
import BasicTable from "../components/Table";

const Simulation: React.FC<{ data: {} }> = ({ data }) => {

  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    console.log(data)
  }, [data])
  
  const arr = [
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
    <BasicTable
      data={arr}
      column={15}
      row={arr.length}
      error={[]}
      done={[]}
      processing={[]}
      selected={[]}
    />
  );
};

export default Simulation;
