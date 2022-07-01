import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import Checkbox from '@material-ui/core/Checkbox';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
// import {FormControlLabel} from '@material-ui/core/FormControlLabel';

const useStyle = makeStyles({
  sonil:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  yadav:{
    margin:"2px",
    width:"200px"
  },
  space:{
    marginTop:"5px",
    marginBottom:"5px"
  }
})
const Login = () => {
  const classes = useStyle()
  const paperStyle={padding:'30x 20px', width:400, margin:"20px auto"}
  const headerStyle={margin:0}
  const avatarStyle={backgroundColor:'green'}
  return (
  <Grid className={classes.sonil}>
    <Paper elevation={20} style={paperStyle} >
    <Grid  align='center'>
      <Avatar style={avatarStyle}>
      <AddCircleOutlineOutlinedIcon/>
      </Avatar>
    </Grid>
      <h2 style={headerStyle}>Sign in</h2>
      <Typography variant='caption'>please fill this form create account</Typography>
    <form style={{margin:"10px"}}>
      <TextField fullWidth label='Email'  style={{ marginTop:"5px",marginBottom:"5px"}}></TextField>
      <TextField fullWidth label='Password'  style={{ marginTop:"5px",marginBottom:"5px"}}></TextField>
   <br></br>
   <Button type='signin' variant='contained' color='primary' style={{ marginTop:"5px",marginBottom:"5px"}} >SignIn</Button>
    </form>
    </Paper>
  </Grid>
  )
}

export default Login;