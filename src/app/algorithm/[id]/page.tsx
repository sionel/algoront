import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Post } from "../../../types/post";
import { connectToDatabase, convertApiDataToClientData } from "@/util/database";
import { ObjectId } from "mongodb";
import Baek1931 from "@/solutions/baek1931/Baek1931";
import MarkDownPost from "@/components/MarkDownPost";

import CommentSection from "@/components/Comment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import SolutionSection from "@/solutions/SolutionSection";
import DescriptionSection from "@/components/Description";
import { ApiComment, ClientComment } from "@/types/comment";

const Solution = async ({ params: { id } }: { params: { id: any } }) => {
  let { db } = await connectToDatabase();
  let question: any = await db
    .collection("question")
    .findOne({ id })
    .then((e: any) => {
      e._id = e._id.toString();
      return e;
    });
  let comments: ClientComment[] = await db
    .collection<ApiComment>("comments")
    .find({ questionId: id })
    .toArray()
    .then((list) => list.map((comment) => convertApiDataToClientData(comment)));

  return (
    <Container sx={{ maxWidth: 1200, minWidth: 800 }}>
      <Link href="/algorithm" passHref>
        <IconButton edge="start" color="default" aria-label="뒤로가기">
          <ArrowBackIcon />
        </IconButton>
      </Link>
      <DescriptionSection post={question.md} />
      <Divider />
      <SolutionSection questionId={id} />
      <Divider />
      <CommentSection comments={comments} />

      {/* <Test11 problemId="123" /> */}
      {/* <EnhancedComponentA />
      <Baek1931 /> */}
      {/* <Accordion
        expanded={true}
        onChange={()=>{}}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={true}
        onChange={()=>{}}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={true}
        onChange={()=>{}}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </Container>
  );
};

export default Solution;
