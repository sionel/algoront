import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Post } from "../type";
import { connectToDatabase } from "@/util/database";
import { ObjectId } from "mongodb";
import MarkDownPost from "../components/MarkDownPost";
import Baek1931 from "@/solutions/baek1931/Baek1931";
import { EnhancedComponentA } from "@/solutions";

const Solution: React.FC<Post> = async (props) => {
  let { db } = await connectToDatabase();
  let question: any = await db
    .collection("question")
    .findOne({ id: "baek_1931" })
    .then((e: any) => {
      e._id = e._id.toString();
      return e;
    });

  return (
    <Container>
      <MarkDownPost post={question.md} />
      <Divider />
      <h2>풀이법</h2>
      <EnhancedComponentA />
      <Baek1931 />
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
