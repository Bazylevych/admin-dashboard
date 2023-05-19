import { Box } from "@mui/material";
import { FC } from "react";
import Header from "../global/Header";
import BarChart from "../../components/BarChart/BarChart";

const Bar: FC = () => {
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
