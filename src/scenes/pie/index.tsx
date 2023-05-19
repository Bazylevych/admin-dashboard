import { Box, useTheme } from "@mui/material";
import { FC } from "react";
import { tokens } from "../../theme";
import Header from "../global/Header";
import PieChart from "../../components/PieChart/PieChart";

const Pie: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        margin: "20px",
      }}
    >
      <Header title="PIE CHART" subtitle="Simple Pie Chart" />

      <Box
        sx={{
          height: "75vh",
        }}
      >
        <PieChart isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Pie;
