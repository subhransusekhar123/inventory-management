import React, { useEffect } from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
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
  const avatarStyle={backgroundColor:'blue'}

  const [loginData,setloginData] = React.useState({
    email:'',
    password:"",
  })

  const [dataGot,setDataGot] = React.useState([])

  useEffect(()=>{
    
  },[dataGot])

  const changeHandler = (e) => {
    setloginData({
      ...loginData,[e.target.name]:e.target.value
    })
  }

  const clickHandler = (e) => {
    e.preventDefault()
    console.warn(loginData)
    if(loginData.email && loginData.password){
      axios.post("http://localhost:8900/auth/login",loginData)
      .then((data)=>{
        setDataGot(data.data)
        localStorage.setItem("setData",JSON.stringify(data.data))
        alert("success")
      })
      .catch((err)=>{
        alert( "invalid data" )
      })
    }else{
      alert("fill all the fields")
    }

  }
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
      <TextField fullWidth label='Email'  style={{ marginTop:"5px",marginBottom:"5px"}} onChange={changeHandler} name="email" type="email"></TextField>
      <TextField fullWidth label='Password'  style={{ marginTop:"5px",marginBottom:"5px"}} onChange={changeHandler} name="password" type="password"></TextField>
   <br></br>
   <Button type='signin' variant='contained' color='primary' style={{ marginTop:"5px",marginBottom:"5px"}} onClick={clickHandler}>SignIn</Button>
    </form>
    </Paper>
  </Grid>
  )
}

export default Login;