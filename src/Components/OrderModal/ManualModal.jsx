
import * as React from 'react';
import { useState } from "react"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, Input, InputLabel } from '@mui/material';
import axios from "axios"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ManualModal = ({children , editUpdate ,setEditUpdate }) => {
  
  const [editChange,setEditChange] = React.useState({
    quantity:0
  })

  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let localEditData = JSON.parse(localStorage.getItem('postEditData'))
  console.log(`localEditData._id`,localEditData)

  const getDataFromLocal = () => {
    setEditChange({name:localEditData?.name,quantity:localEditData?.quantity,price:localEditData?.price})
  }

  const updateHandler = (id) => {
    axios.put(`http://localhost:8900/order/updateData/${id}`,editChange)
    .then((data)=>{
      alert('data updated')
      setEditUpdate(data.data)
    })
    .catch((err)=>{console.log(err)})
  }

  React.useEffect(()=>{
    getDataFromLocal()
  },[editUpdate])


  const handleChange = (e) => {
    setEditChange({...editChange,[e.target.name] : e.target.value})
  }

  return (
<div>
 <Button onClick={handleOpen}>{children}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
        
         <FormControl variant='standard' fullWidth>
                <InputLabel htmlFor="component-simple">quantity</InputLabel>
                <Input id="component-simple" value={editChange.quantity} onChange={handleChange} name="quantity"/>
         </FormControl>
       

         <FormControl variant='standard' fullWidth>
                <Button onClick={()=>{ updateHandler(localEditData?._id)}}>update</Button>
         </FormControl>

          </Box>
        </Fade>
      </Modal>
</div>
      
  
  );
}

export default ManualModal