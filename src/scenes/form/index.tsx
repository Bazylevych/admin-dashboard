import { FC } from "react";
import { Box, Button, TextField, useMediaQuery, useTheme } from "@mui/material";
import Header from "../global/Header";
import { Formik } from "formik";
import { initialValues } from "../../constans/form/initialValues";
import { userSchema } from "../../constans/form/userSchema";
import { tokens } from "../../theme";

const Form: FC = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormSubmit = (values: any) => {
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
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={userSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems="center"
                width="30vw"
                sx={{
                  gap: "25px",
                  minWidth: "250px",
                  backgroundColor: `rgba(114, 118, 129, 0.2)`,
                  p: "30px 30px 20px 30px ",
                  borderRadius: "10px",
                  "& .MuiFormHelperText-root.Mui-error": {
                    position: "absolute",
                    top: "50px",
                  },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="First Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  name="firstName"
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{
                    maxWidth: "320px",
                    minWidth: "220px",
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Last Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  name="lastName"
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  sx={{
                    maxWidth: "320px",
                    minWidth: "220px",
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{
                    maxWidth: "320px",
                    minWidth: "220px",
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Contact Number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  name="contact"
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                  sx={{
                    maxWidth: "320px",
                    minWidth: "220px",
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address1}
                  name="address1"
                  error={!!touched.address1 && !!errors.address1}
                  helperText={touched.address1 && errors.address1}
                  sx={{
                    maxWidth: "320px",
                    minWidth: "220px",
                  }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address2"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address2}
                  name="address2"
                  error={!!touched.address2 && !!errors.address2}
                  helperText={touched.address2 && errors.address2}
                  sx={{
                    maxWidth: "320px",
                    minWidth: "220px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Button
                    type="submit"
                    color="secondary"
                    variant="outlined"
                    size="large"
                  >
                    Create New User
                  </Button>
                </Box>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Form;
