import { FC } from "react";
import { Box, useMediaQuery } from "@mui/material";
import Header from "../global/Header";
import BuildFormikForm from "./BuildFormikForm";

const Form: FC = () => {
  // const isNonMobile = useMediaQuery("(min-width: 600px)");
  const handleFormikSubmit = (values: unknown) => {
    console.log(values);
  };

  return (
    <Box m="20px" width="auto">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <BuildFormikForm handleFormikSubmit={handleFormikSubmit} />
      </Box>
    </Box>
  );
};

export default Form;
