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

      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{
          m: "15px 0 5px 20px",
        }}
      >
        Data
      </Typography>
      <Item
        title="Manage Team"
        to="/team"
        icon={<PeopleOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        collapsed={collapsed}
      />
      <Item
        title="Contacts Information"
        to="/contacts"
        icon={<ContactsOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        collapsed={collapsed}
      />
      <Item
        title="Invoices Balances"
        to="/invoices"
        icon={<ReceiptOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        collapsed={collapsed}
      />

      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{
          m: "15px 0 5px 20px",
        }}
      >
        Pages
      </Typography>
      <Item
        title="Profile Form"
        to="/form"
        icon={<PersonOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        collapsed={collapsed}
      />
      <Item
        title="Calendar"
        to="/calendar"
        icon={<CalendarTodayOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        collapsed={collapsed}
      />
      <Item
        title="FAQ"
        to="/faq"
        icon={<HelpOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        collapsed={collapsed}
      />

      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{
          m: "15px 0 5px 20px",
        }}
      >
        Charts
      </Typography>
      <Item
        title="Bar Chart"
        to="/bar"
        icon={<BarChartOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        collapsed={collapsed}
      />
      <Item
        title="Pie Chart"
        to="/pie"
        icon={<PieChartOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        collapsed={collapsed}
      />
      <Item
        title="Line Chart"
        to="/line"
        icon={<TimelineOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        collapsed={collapsed}
      />
      <Item
        title="Geography Chart"
        to="/geography"
        icon={<MapOutlinedIcon />}
        selected={selected}
        setSelected={setSelected}
        collapsed={collapsed}
      />
    </Box>
  );
};

export default MenuItems;
