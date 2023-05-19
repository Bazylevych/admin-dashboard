import { Box } from "@mui/material";
import { FC } from "react";
import Header from "../global/Header";
import LineChart from "../../components/LineChart/LineChart";

const Line: FC = () => {
  return (
    <Box
      sx={{
        margin: "20px",
      }}
    >
      <Header title="Line CHART" subtitle="Simple Line Chart" />

      <Box
        sx={{
          height: "75vh",
        }}
      >
        <LineChart isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Line;
