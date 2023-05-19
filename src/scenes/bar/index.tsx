import { Box, useTheme } from "@mui/material";
import { FC } from "react";
import { tokens } from "../../theme";
import Header from "../global/Header";
import BarChart from "../../components/BarChart/BarChart";

const Bar: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        margin: "20px",
      }}
    >
      <Header title="BAR CHART" subtitle="Simple Bar Chart" />

      <Box
        sx={{
          height: "75vh",
        }}
      >
        <BarChart isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Bar;
