import { Box, Typography, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import { tokens } from "../../theme";
import ProgressCircle from "./ProgressCircle";

interface StatBoxProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  progress: number;
  increase: string;
}

const StatBox: FC<StatBoxProps> = ({
  title,
  subtitle,
  icon,
  progress,
  increase,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          {icon}
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: colors.grey[100],
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} size={60} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: colors.greenAccent[500],
            }}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "italic",
              color: colors.greenAccent[600],
            }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
