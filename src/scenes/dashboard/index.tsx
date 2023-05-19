import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../global/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { FC } from "react";
import { tokens } from "../../theme";
import StatBox from "../../components/Dashboard/StatBox";
import LineChart from "../../components/LineChart/LineChart";
import { mockTransactions } from "../../data/mockData";
import ProgressCircle from "../../components/Dashboard/ProgressCircle";
import BarChart from "../../components/BarChart/BarChart";
import PieChart from "../../components/PieChart/PieChart";
import Geography from "../geography/index";
import GeographyChart from "../../components/GeograpyChart/GeographyChart";

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
      </Box>

      {/* GRID & CHARTS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: "135px",
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

        {/* ROW 2 */}
        <Box
          sx={{
            gridColumn: "span 8",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
          }}
        >
          <Box
            sx={{
              mt: "25px",
              padding: "0 30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "600",
                  color: colors.grey[100],
                }}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  color: colors.greenAccent[500],
                }}
              >
                $678,987.32
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{
                    fontSize: "26px",
                    color: colors.greenAccent[500],
                  }}
                />
              </IconButton>
            </Box>
          </Box>

          <Box
            sx={{
              height: "250px",
              mt: "-20px",
            }}
          >
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* TRANZACTIONS */}
        <Box
          sx={{
            gridColumn: "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: `4px solid ${colors.primary[500]}`,
              colors: colors.grey[100],
              p: "15px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: colors.grey[100],
                fontWeight: "600",
              }}
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: `4px solid ${colors.primary[500]}`,
                p: "15px",
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.greenAccent[500],
                    fontWeight: "600",
                  }}
                >
                  {transaction.txId}
                </Typography>
                <Typography
                  sx={{
                    color: colors.grey[100],
                  }}
                >
                  {transaction.user}
                </Typography>
              </Box>
              <Box
                sx={{
                  color: colors.grey[100],
                }}
              >
                {transaction.date}
              </Box>
              <Box
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  p: "5px 10px",
                  borderRadius: "4px",
                  color: colors.primary[500],
                }}
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          sx={{
            gridColumn: "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            padding: "30px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
            }}
          >
            Campaign
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: "25px",
            }}
          >
            <ProgressCircle progress={0.75} size={105} />
            <Typography
              variant="h5"
              sx={{
                color: colors.greenAccent[500],
                mt: "15px",
              }}
            >
              $34,224 revene generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            gridColumn: "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              padding: "30px 30px 0 30px",
            }}
          >
            Sales Quantity
          </Typography>
          <Box
            sx={{
              height: "250px",
              mt: "-20px",
            }}
          >
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          sx={{
            gridColumn: "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            padding: "30px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              mb: "15px",
            }}
          >
            Geography Based Traffic
          </Typography>
          <Box
            sx={{
              height: "200px",
            }}
          >
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>

        {/*  */}
      </Box>
    </Box>
  );
};

export default Dashboard;
