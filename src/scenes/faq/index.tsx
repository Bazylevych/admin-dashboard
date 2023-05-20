import { Box, useTheme } from "@mui/material";
import { FC } from "react";
import { tokens } from "../../theme";
import Header from "../global/Header";
import { faqData } from "../../data/faqData";
import FaqBlock from "./FaqBlock";

const FAQ: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        margin: "20px",
      }}
    >
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {faqData.map((data) => (
        <FaqBlock
          question={data.question}
          answer={data.answer}
          color={colors.greenAccent[500]}
        />
      ))}
    </Box>
  );
};

export default FAQ;
