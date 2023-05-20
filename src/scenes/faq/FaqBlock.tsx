import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { FC } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FaqBlockProps {
  question: string;
  answer: string;
  color: string;
}

const FaqBlock: FC<FaqBlockProps> = ({
  question,
  answer,
  color,
}: FaqBlockProps) => {
  return (
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={color} variant="h5">
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqBlock;
