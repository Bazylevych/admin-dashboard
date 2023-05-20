import { Box, useTheme } from "@mui/material";
import { FC } from "react";
import { tokens } from "../../theme";
import Header from "../global/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import TeamRenderCell from "./TeamRenderCell";
import { IRenderCell } from "../../models/team";

const Team: FC = () => {
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
    {
      field: "age",
      headerName: "AGE",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "PHONE", flex: 1 },
    { field: "email", headerName: "EMAIL", flex: 1 },

    {
      field: "access",
      headerName: "ACCESS",
      flex: 1,
      renderCell: ({ row: { access } }: IRenderCell) => {
        return <TeamRenderCell access={access} colors={colors} />;
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
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
          rows={mockDataTeam}
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
          }}
        />
      </Box>
    </Box>
  );
};

export default Team;
