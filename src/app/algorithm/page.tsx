import { connectToDatabase } from "@/util/database";
import React from "react";
import MarkDownPost from "./components/MarkDownPost";
import { Button } from "@mui/material";
const page = async () => {
  // let { db } = await connectToDatabase();
  // let result: string = await db
  //   .collection("question")
  //   .find()
  //   .toArray()
  //   .then((e: any[]) => e[0].markdown);

  return (
    <div>
      <Button>asd </Button>
    </div>
  );
};

export default page;
