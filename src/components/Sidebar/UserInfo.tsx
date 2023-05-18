import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { tokens } from "../../theme";
// import user from "../../assets/user.jpg";
// import user2 from "../../assets/user2.jpg";

const UserInfo: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="25px">
      {/* <Box display="flex" justifyContent="center" alignItems="center">
        <img
          src={user2}
          alt="profile-user"
          width="100px"
          height="100px"
          style={{
            cursor: "pointer",
            borderRadius: "50%",
          }}
        />
      </Box> */}
      <Box textAlign={"center"}>
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight={"bold"}
          sx={{ m: "10px 0 0 0" }}
        >
          Max Baz
        </Typography>
        <Typography variant="h5" color={colors.greenAccent[500]}>
          Admin
        </Typography>
      </Box>
    </Box>
  );
};

export default UserInfo;
