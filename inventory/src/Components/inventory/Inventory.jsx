import  React,{useState} from "react";
import Grid from "@mui/material/Grid";
// import AddModal from "./AddModal";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import AddIcon from '@mui/icons-material/Add';
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';



  

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
  const [age, setAge] = React.useState('');
  const [rate, setRate] = React.useState('');
  const [company,setCompany] = React.useState('');


  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const ratechange = (event) => {
    setRate(event.target.value);
  }; 
   const companychange = (event) => {
    setCompany(event.target.value);
  };
  return (
    <div>
  
      <Grid container spacing={0}>
      <Grid item xs={6}> 
      <h1>Inventory</h1>
      </Grid>
      {/* <Grid item xs={4}> */}
      <Stack spacing={1} direction="row">
      <Button >Action</Button>
      </Stack>
      {/* </Grid> */}
      {/* <Grid item xs={4}> */}
      <Stack spacing={2} direction="row">
      <Button>upload items</Button>
      </Stack>
      {/* </Grid> */}
    </Grid>
    <br />
      <TableContainer component={Paper}>
      <Grid container spacing={2}>
        {/* <Grid item xs={6} md={12} sx={{ margin: "0 auto", marginTop: "30px",marginBottom: "20px" }}> */}
        <Grid item xs={4} sx={{ marginTop: "5px",}}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Data</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="data"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>product</MenuItem>
        <MenuItem value={20}>company</MenuItem>
        <MenuItem value={30}>rate</MenuItem>
      </Select>
    </FormControl>
        </Grid>
        <Grid item xs={4} sx={{ marginTop: "5px",}}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">category</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={company}
        label="category"
        onChange={companychange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>product</MenuItem>
        <MenuItem value={20}>company</MenuItem>
        <MenuItem value={30}>rate</MenuItem>
      </Select>
    </FormControl>       
     </Grid>
        <Grid item xs={4} sx={{ marginTop: "5px",}}>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">status</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={rate}
        label="status"
        onChange={ratechange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>product</MenuItem>
        <MenuItem value={20}>company</MenuItem>
        <MenuItem value={30}>rate</MenuItem>
      </Select>
    </FormControl>        
    </Grid>
        </Grid>
        {/* </Grid> */}
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
