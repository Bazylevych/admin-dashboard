import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import { ISidebarElements } from "../models/sidebar";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const sidebarElements: ISidebarElements = {
  data: [
    {
      title: "Manage Team",
      to: "/team",
      icon: <PeopleOutlinedIcon />,
    },
    {
      title: "Contacts Information",
      to: "/contacts",
      icon: <ContactsOutlinedIcon />,
    },
    {
      title: "Invoices Balances",
      to: "/invoices",
      icon: <ReceiptOutlinedIcon />,
    },
  ],
  pages: [
    {
      title: "Profile Form",
      to: "/form",
      icon: <PersonOutlinedIcon />,
    },
    {
      title: "Calendar",
      to: "/calendar",
      icon: <CalendarTodayOutlinedIcon />,
    },
    {
      title: "FAQ",
      to: "/faq",
      icon: <HelpOutlinedIcon />,
    },
  ],
  charts: [
    {
      title: "Bar Chart",
      to: "/bar",
      icon: <BarChartOutlinedIcon />,
    },
    {
      title: "Pie Chart",
      to: "/pie",
      icon: <PieChartOutlinedIcon />,
    },
    {
      title: "Line Chart",
      to: "/line",
      icon: <TimelineOutlinedIcon />,
    },
    {
      title: "Geography Chart",
      to: "/geography",
      icon: <MapOutlinedIcon />,
    },
  ],
};
