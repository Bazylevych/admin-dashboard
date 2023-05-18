import { FC, useState } from "react";
import { Sidebar as MSidebar, Menu, useProSidebar } from "react-pro-sidebar";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import MenuItems from "../../components/Sidebar/MenuItems";
import SideHeader from "../../components/Sidebar/SideHeader";
import UserInfo from "../../components/Sidebar/UserInfo";

const Sidebar: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { collapsed, collapseSidebar } = useProSidebar();

  return (
    <MSidebar
      defaultCollapsed={collapsed}
      backgroundColor={colors.primary[400]}
      rootStyles={{
        border: "none !important",
      }}
    >
      <Menu
        menuItemStyles={{
          icon: {
            backgroundColor: "transparent !important",
          },
          button: {
            "&:hover": {
              backgroundColor: colors.primary[400],
              color: "#868dfb !important",
            },
            ".ps-active": {
              color: "#868dfb !important",
            },
            ".ps-active button": {
              color: "#868dfb !important",
            },
          },
        }}
      >
        {/* LOGO ANG MENU ICON */}
        <SideHeader collapsed={collapsed} collapseSidebar={collapseSidebar} />

        {/* USER */}
        {!collapsed && <UserInfo />}

        {/* MENU ITEMS */}
        <MenuItems
          collapsed={collapsed}
          selected={selected}
          setSelected={setSelected}
        />
      </Menu>
    </MSidebar>
  );
};

export default Sidebar;
