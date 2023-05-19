import { Box, Button, useTheme } from "@mui/material";
import Header from "../global/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { FC } from "react";
import { tokens } from "../../theme";
import StatBox from "../../components/Dashboard/StatBox";

const Dashboard: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />
      </Box>

      <Box>
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon
            sx={{
              mr: "10px",
            }}
          />
          Download Reports
        </Button>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: "140px",
          gap: "20px",
        }}
      >
        {/* ROW 1 */}
        <Box
          sx={{
            gridColumn: "span 3",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress={0.75}
            increase="+14%"
            icon={
              <EmailIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        {/* ROW 2 */}
        <Box
          sx={{
            gridColumn: "span 3",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="234,34"
            subtitle="Sales Obtained"
            progress={0.9}
            increase="+56%"
            icon={
              <PointOfSaleIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        {/* ROW 3 */}
        <Box
          sx={{
            gridColumn: "span 3",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="324,342"
            subtitle="New Clients"
            progress={0.3}
            increase="+26%"
            icon={
              <PersonAddIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        {/* ROW 3 */}
        <Box
          sx={{
            gridColumn: "span 3",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title="1,243,342"
            subtitle="Traffic Inbound"
            progress={0.45}
            increase="+90%"
            icon={
              <TrafficIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
