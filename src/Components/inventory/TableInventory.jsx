import * as React from 'react';
import { Badge, Container, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ManualModal from '../ManualModal/ManualModal';
import axios from 'axios';




const TableInventory = ({ update }) => {

  const [data,setData] = React.useState([])
  const [deleteUpdate,setdeleteUpdate] = React.useState([])


    const deleteHandler = (param) => {
      axios.delete(`http://localhost:8900/product/${param}`).then((data)=>{
        alert("data deleted")
        setdeleteUpdate(data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }

    const getDataHandler = () => {
      axios.get("http://localhost:8900/product/").then((data)=>{
        setData(data.data)
        console.log('datainTAble',data)
      })
      .catch((err)=>console.log(err))
    }

    const editHandler = (param) =>{

    }

    React.useEffect(() => {
     getDataHandler()
    }, [update,deleteUpdate])

    

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>sl.No</TableCell>
              <TableCell align="right">image&nbsp;</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">quantity&nbsp;</TableCell>
              <TableCell align="right">price&nbsp;</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((product,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">{index+1}</TableCell>
                <TableCell align="right">
                <img src={product.image} alt='image' style={{height:"50px",width:"50px"}}/>
                  </TableCell>
                <TableCell component="th" scope="row" align="right">
                  {product.name}
                </TableCell>
                <TableCell align="right">{product.quantity}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">
                  <IconButton >
                    <ManualModal>
                      <ModeEditOutlineRoundedIcon color='primary'/>
                    </ManualModal>
                  </IconButton>
                  <IconButton onClick={()=>{deleteHandler(product._id)}}>
                    <DeleteRoundedIcon color='warning'/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default TableInventory;