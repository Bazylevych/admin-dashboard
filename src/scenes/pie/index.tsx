import { Box } from "@mui/material";
import { FC } from "react";
import Header from "../global/Header";
import PieChart from "../../components/PieChart/PieChart";

const Pie: FC = () => {
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
