import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: 159,
    product: "ASUS",
    customer: "Harold",
    date: "1 March",
    amount: 2000,
    status: "Pending",
  },
  {
    id: 169,
    product: "ASUS",
    customer: "Steve",
    date: "5 March",
    amount: 2500,
    status: "Approved",
  },
];

const MyTable = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">id</TableCell>
            <TableCell className="tableCell">product</TableCell>
            <TableCell className="tableCell">customer</TableCell>
            <TableCell className="tableCell">date</TableCell>
            <TableCell className="tableCell">amount</TableCell>
            <TableCell className="tableCell">status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell" >{row.product}</TableCell>
              <TableCell className="tableCell" >{row.customer}</TableCell>
              <TableCell className="tableCell" >{row.date}</TableCell>
              <TableCell className="tableCell" >{row.amount}</TableCell>
              <TableCell className="tableCell" ><span className={`status ${row.status}`}>{row.status} </span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
