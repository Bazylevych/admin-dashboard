import { FC } from "react";
import { AccessType } from "../../models/team";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpenOutlined";
import { IColors } from "../../models/theme";

interface RenderCellPropd {
  access: AccessType;
  colors: IColors;
}

const TeamRenderCell: FC<RenderCellPropd> = ({
  access,
  colors,
}: RenderCellPropd) => {
  return (
    <Box
      width="60%"
      p="5px"
      display="flex"
      justifyContent="center"
      sx={{
        backgroundColor:
          access === "admin"
            ? colors.greenAccent[600]
            : colors.greenAccent[700],
      }}
      borderRadius="4px"
    >
      {access === "admin" && <AdminPanelSettingsIcon />}
      {access === "manager" && <SecurityIcon />}
      {access === "user" && <LockOpenIcon />}
      <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
        {access}
      </Typography>
    </Box>
  );
};

export default TeamRenderCell;
