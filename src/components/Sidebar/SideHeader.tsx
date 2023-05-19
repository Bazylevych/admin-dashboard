import { FC } from "react";
import { MenuItem } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

interface SideHeaderProps {
  collapsed: boolean;
  collapseSidebar: (collapsed?: boolean | undefined) => void;
}

const SideHeader: FC<SideHeaderProps> = ({ collapsed, collapseSidebar }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      onClick={() => collapseSidebar(!collapsed)}
      icon={collapsed ? <MenuOutlinedIcon /> : undefined}
      rootStyles={{
        margin: "10px 0 20px 0",
        color: colors.grey[100],
      }}
    >
      {!collapsed && (
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems="center"
          marginLeft={"15px"}
        >
          <Typography variant="h3" color={colors.grey[100]}>
            ADMINIS
          </Typography>
          <IconButton onClick={() => collapseSidebar(!collapsed)}>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
      )}
    </MenuItem>
  );
};

export default SideHeader;
