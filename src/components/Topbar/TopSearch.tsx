import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FC } from "react";

interface TopSearchProps {
  bgColor: string;
}

const TopSearch: FC<TopSearchProps> = ({ bgColor }) => {
  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "3px",
        backgroundColor: bgColor,
      }}
    >
      <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
      <IconButton type="button" sx={{ p: 1 }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default TopSearch;
