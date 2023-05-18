import { Box, useTheme } from "@mui/material";
import { FC } from "react";
import { tokens } from "../../theme";
import TopSearch from "../../components/Topbar/TopSearch";
import TopIcons from "../../components/Topbar/TopIcons";

const Topbar: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Seatch bar */}
      <TopSearch bgColor={colors.primary[400]} />

      {/* ICONS */}
      <TopIcons />
    </Box>
  );
};

export default Topbar;
