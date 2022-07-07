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


const OrderPage = () => {
  const [user_orders,setUser_orders] = React.useState([]);
  const [delete_update,setDelete_update] = React.useState([])

  let user_id = JSON.parse(localStorage.getItem("setData"))?.id
  console.log(user_id,"user_id")

  const deleteHandler = (id) => {
     axios.delete(`http://localhost:8900/order/deleteData/${id}/${user_id}`)
     .then((data)=>{
      alert("deleted")
      setDelete_update(data.data)
    })
     .catch((err)=>console.log(err))
  }

  const getOrder = () => {
    axios.get(`http://localhost:8900/order/getSp/${user_id}`)
    .then((data)=>{
      setUser_orders(data.data)
      console.log(data)
      console.log(user_orders)
    })
    .catch((err)=>console.log(err))
  }

  React.useEffect(()=>{
    getOrder()
  },[delete_update])

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell algin="right">sl No</TableCell>
              <TableCell algin="right">image</TableCell>
              <TableCell align="right">product name</TableCell>
              <TableCell align="right">quantity</TableCell>
              <TableCell align="right">price</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* this is the starting point of map  */}
            {user_orders.map((orders,index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="right">
                  {index + 1}
                </TableCell>
                <TableCell align="right">
                  <img src={orders.image} alt="" srcset="" style={{height:"50px",width:"50px"}} />
                </TableCell>
                <TableCell align="right">{orders.name}</TableCell>
                <TableCell align="right">{orders.quantity}</TableCell>
                <TableCell align="right">{orders.price}</TableCell>
                <TableCell align="right">
                  <IconButton >
                    <ManualModal>
                      <ModeEditOutlineRoundedIcon color='primary'/>
                    </ManualModal>
                  </IconButton>
                  <IconButton onClick={()=>{deleteHandler(orders._id)}}>
                    <DeleteRoundedIcon color='warning'/>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {/* this is the end point of map */}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default OrderPage;