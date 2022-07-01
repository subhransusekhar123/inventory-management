
import * as React from 'react';
import { useState } from "react"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, Input, InputLabel } from '@mui/material';

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

const ManualModal = ({children}) => {
  const [editChange,setEditChange] = useState({
    name:"",
    x:''
  })
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="component-simple">Name</InputLabel>
                <Input id="component-simple"  value={editChange.name} onChange={handleChange} name="name"/>
         </FormControl>
         <FormControl variant='standard' fullWidth>
                <InputLabel htmlFor="component-simple">x</InputLabel>
                <Input id="component-simple" value={editChange.x} onChange={handleChange} name="x"/>
         </FormControl>

         <FormControl variant='standard' fullWidth>
                <Button>update</Button>
         </FormControl>

          </Box>
        </Fade>
      </Modal>
</div>
      
  
  );
}

export default ManualModal