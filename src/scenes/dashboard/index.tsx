import { Box } from "@mui/material";
import Header from "../global/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="Dashboard" subtitle="Dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
