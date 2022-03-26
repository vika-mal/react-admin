import React from "react";
import "./dataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from '@mui/material';

const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "firstName", headerName: "First name", flex: 2 },
  { field: "lastName", headerName: "Last name", flex: 2 },
  {
    field: "age",
    headerName: "Age",
    flex: 1,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 2,
    renderCell: (params) => {
      return (
        <>
          <span>{params.row.lastName}</span>
          <p>{params.row.age}</p>
        </>
      );
    },
  },
  {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
          return (
              <div>
                  <Button variant="contained" color="error">Delete</Button>
              </div>
          )
      }
  }
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 14 },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const DataTable = () => {
  return (
    <div className="dataTable">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
