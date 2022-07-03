import React from 'react';
import { Avatar, Button, Grid, IconButton, Paper, TextField, Typography } from '@mui/material';
import Checkbox from '@material-ui/core/Checkbox';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

  }
})
const Signup = () => {
  const navigate = useNavigate()
  const classes = useStyle()
  //style
  const paperStyle={padding:'30x 20px', width:400, margin:"20px auto"}
  const headerStyle={margin:0}
  const avatarStyle={backgroundColor:'blue'}
  //style

  const [signupData,setSignupData] = React.useState({
    firstname:"",
    lastname:"",
    email:'',
    password:"",
    companyname:""
  })

  const changeHandler = (e) => {
    setSignupData({
      ...signupData,[e.target.name]:e.target.value
    })
  }

  const clickHandler = (e) => {
    e.preventDefault()
    console.warn(signupData)
    axios.post("http://localhost:8900/auth/signup",signupData)
    .then((data)=>{
      alert("data saved")
      navigate("/signin")
    })
    .catch((err)=>{
      alert("error")
    })
  }
  return (
  <Grid className={classes.sonil}>
    <Paper elevation={20} style={paperStyle} >
    <Grid  align='center'>
      <Avatar style={avatarStyle}>
      <AddCircleOutlineOutlinedIcon/>
      </Avatar>
    </Grid>
      <h2 style={headerStyle}>Sign Up</h2>
      <Typography variant='caption'>please fill this form t create account</Typography>
    <form style={{margin:"5px"}}>
      <TextField fullWidth label='First Name' style={{ marginTop:"5px",marginBottom:"5px"}} name="firstname" onChange={changeHandler}></TextField>
      <TextField fullWidth label='Last Name' style={{ marginTop:"5px",marginBottom:"5px"}} name="lastname" onChange={changeHandler}></TextField>
      <TextField fullWidth label='Email' style={{ marginTop:"5px",marginBottom:"5px"}} name="email" onChange={changeHandler}></TextField>
      <TextField fullWidth label='Password' style={{ marginTop:"5px",marginBottom:"5px"}} name="password" type="password" onChange={changeHandler}></TextField>
      <TextField fullWidth label='Company Name' style={{ marginTop:"5px",marginBottom:"5px"}} name="companyname" onChange={changeHandler}></TextField>
     
    
<br></br>

<Button type='signup' variant='contained' color='primary' onClick={clickHandler}>SignUp</Button>


    </form>
 <Typography variant='h6'>
    <IconButton color='primary' onClick={()=>{navigate("/signin")}}>

    already have an account
    </IconButton>
  </Typography>
    </Paper>
  </Grid>
  )
}
    
  
export default Signup;