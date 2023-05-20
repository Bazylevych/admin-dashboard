import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { tokens } from "../../theme";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Header from "../global/Header";
import { mockDataInvoices } from "../../data/mockData";

const Invoices: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "phone", headerName: "PHONE", flex: 1 },
    { field: "email", headerName: "EMAIL", flex: 1 },
    {
      field: "cost",
      headerName: "COST",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    { field: "date", headerName: "DATE", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
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
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
