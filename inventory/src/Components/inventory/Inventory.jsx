import * as React from "react";
import Grid from "@mui/material/Grid";
// import AddModal from "./AddModal";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from '@mui/icons-material/Add';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
// import AddStockEdit from "./AddStockEdit";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from '@mui/material/TextField';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 0, 0),
  createData("Ice cream sandwich", 237, 9.0, 0, 0),
  createData("Eclair", 262, 16.0, 0, 0),
  createData("Cupcake", 305, 3.7, 0, 0),
  createData("Gingerbread", 356, 16.0, 0, 0)
];

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, <AddStockEdit />, <DeleteIcon />),
//   createData("Ice cream sandwich", 237, 9.0, <AddStockEdit />, <DeleteIcon />),
//   createData("Eclair", 262, 16.0, <AddStockEdit />, <DeleteIcon />),
//   createData("Cupcake", 305, 3.7, <AddStockEdit />, <DeleteIcon />),
//   createData("Gingerbread", 356, 16.0, <AddStockEdit />, <DeleteIcon />)
// ];


export default function CustomizedTables() {
  return (
    <div>
       {/* <Button variant="contained" component="span">
          Upload
        </Button> 
      <AddModal />   */}
      <TableContainer component={Paper}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={10} sx={{ margin: "0 auto", marginTop: "30px",marginBottom: "20px" }}>
      <TextField label="Date" color="secondary" focused />
      <TextField label="Company " color="secondary" focused />
      <TextField label="Status " color="secondary" focused />
        </Grid>
        </Grid>
        <Grid container spacing={2}>
        <Grid item xs={6} md={8} sx={{ margin: "0 auto", marginTop: "10px",marginBottom: "50px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sr.No</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">catagory</StyledTableCell>
              <StyledTableCell align="right">company</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>

              <StyledTableCell align="right">
                <EditIcon />
              </StyledTableCell>
              <StyledTableCell align="right">
                {" "}
                <DeleteIcon />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {i + 1}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>

                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        </Grid>
        </Grid>
      </TableContainer>
    </div>
  );
}
