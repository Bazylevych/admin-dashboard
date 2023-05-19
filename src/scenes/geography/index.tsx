import { Box, useTheme } from "@mui/material";
import { FC } from "react";
import { tokens } from "../../theme";
import Header from "../global/Header";
import GeographyChart from "../../components/GeograpyChart/GeographyChart";

const Geography: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        margin: "20px",
      }}
    >
      <Header title="GEOGRAPHY CHART" subtitle="Simple Geography Chart" />

      <Box
        sx={{
          height: "75vh",
          border: `1px solid ${colors.grey[100]}`,
        }}
      >
        <GeographyChart isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Geography;
