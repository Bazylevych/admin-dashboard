import { IconButton, Typography, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import { tokens } from "../../theme";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

interface ItemProps {
  title: string;
  to: string;
  icon: ReactNode;
  selected: string;
  setSelected: (selected: string) => void;
  collapsed: boolean;
}

const Item: FC<ItemProps> = ({
  title,
  to,
  icon,
  selected,
  setSelected,
  collapsed,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={collapsed ? <IconButton>{icon}</IconButton> : icon}
    >
      <Typography variant="h6">{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export default Item;
