import * as React from 'react';
import { useState,useEffect } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import TextField from '@mui/material/TextField';
import axios from 'axios'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function profilepage() {
const [edit, setEdit] = React.useState({
  firstname:'',
  lastname:'',
  email:'',
  company:'',
});
const usersdata1 = JSON.parse( localStorage.getItem('setData' ) );
const usersda = usersdata1.res; 
useEffect(() => {
  if (usersda) {
    setEdit(usersda)
  }
}, []);

const handleChange=(event)=>{
  setEdit({...edit,[event.target.name]:event.target.value})
    setEditChange({name:localEditData?.name,quantity:localEditData?.quantity,price:localEditData?.price})

}

const updateHandler = (id) => {
  // console.log(id)
  // console.log(edit.firstname)
  // console.warn(edit)
  // console.warn(edit.firstname)

  axios.put(`http://localhost:8900/auth/update_profile/${id}`,edit)
  .then((data)=>{
    alert('Profile updated')
    setEdit(data.data)
  })
  .catch((err)=>{console.log(err)})
}

  return (
    
    <Container>
      <Typography>
        Profile Page
      </Typography>
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
     <TextField  label="Firstname" name="firstname" onChange={handleChange} value={edit.firstname} style={{ marginTop:"5px",marginBottom:"5px",width:"500px"}} variant="outlined" /><br></br><br></br>
      <TextField  label="Lastname" name="lastname"  onChange={handleChange} value={edit.lastname}  style={{ marginTop:"5px",marginBottom:"5px",width:"500px"}} variant="outlined" /><br></br><br></br>
      <TextField  label="Email" name="email" onChange={handleChange} value={edit.email} style={{ marginTop:"5px",marginBottom:"5px",width:"500px"}} variant="outlined" /><br></br><br></br>
      <TextField label="Company"  name="company" onChange={handleChange} value={edit.company} style={{ marginTop:"5px",marginBottom:"5px",width:"500px"}} variant="outlined" /> <br></br><br></br>
      <Button onClick={()=>{ updateHandler(edit?._id)}}>Update Profile</Button>
      </CardContent>
    
    </Card>
    </Container>
  );
}
