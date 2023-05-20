import { Box, Typography, useTheme } from "@mui/material";
import Item from "./Item";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { tokens } from "../../theme";
import { FC } from "react";
import { sidebarElements } from "../../data/sidebar";

interface MenuItemsProps {
  collapsed: boolean;
  selected: string;
  setSelected: (selected: string) => void;
}

const MenuItems: FC<MenuItemsProps> = ({
  collapsed,
  selected,
  setSelected,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box paddingLeft={collapsed ? undefined : "10%"}>
      <Item
        title="Dashboard"
        to="/"
        icon={<HomeOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        collapsed={collapsed}
      />

      {/* DATA */}
      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{
          m: "15px 0 5px 20px",
        }}
      >
        Data
      </Typography>

      {sidebarElements.data.map((item) => (
        <Item
          title={item.title}
          to={item.to}
          icon={item.icon}
          selected={selected}
          setSelected={setSelected}
          collapsed={collapsed}
        />
      ))}

      {/* PAGES */}
      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{
          m: "15px 0 5px 20px",
        }}
      >
        Pages
      </Typography>

      {sidebarElements.pages.map((item) => (
        <Item
          title={item.title}
          to={item.to}
          icon={item.icon}
          selected={selected}
          setSelected={setSelected}
          collapsed={collapsed}
        />
      ))}

      {/* CHARTS */}
      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{
          m: "15px 0 5px 20px",
        }}
      >
        Charts
      </Typography>
      {sidebarElements.charts.map((item) => (
        <Item
          title={item.title}
          to={item.to}
          icon={item.icon}
          selected={selected}
          setSelected={setSelected}
          collapsed={collapsed}
        />
      ))}
    </Box>
  );
};

export default MenuItems;
