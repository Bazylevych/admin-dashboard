import { Box, useTheme } from "@mui/material";
import { FC } from "react";
import { tokens } from "../../theme";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Header from "../global/Header";
import { mockDataContacts } from "../../data/mockData";

const Contacts: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "AGE",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "PHONE", flex: 1 },
    { field: "email", headerName: "EMAIL", flex: 1 },

    { field: "address", headerName: "ADDRESS", flex: 1 },
    { field: "city", headerName: "CITY", flex: 1 },
    { field: "zipCode", headerName: "ZIP CODE", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="0px"
        height="75vh"
        sx={{
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          slots={{ toolbar: GridToolbar }}
          columns={columns}
          sx={{
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
