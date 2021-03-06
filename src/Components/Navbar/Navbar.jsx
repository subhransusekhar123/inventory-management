import { Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from '../Sidebar/Sidebar';
import { Link, useNavigate } from "react-router-dom";
import Profile from '../profile/Profile';
import UserSidebar from '../Sidebar/UserSidebar';


const Navbar = () => {
    let navigate = useNavigate()
    let isAdmin = false ;
    let getData =JSON.parse( localStorage.getItem('setData') )
    let user_data = getData?.user;
    if(user_data === "admin"){
        isAdmin = true
    }else{
        isAdmin= false
    }

    const logout = () => {
        localStorage.removeItem("setData");
        navigate("/signin")
    }

      return (
    <Container>
        <Toolbar style={{marginBottom:"40px"}}>
            <IconButton color="inherit">
                {
                    isAdmin ?  
                    <Sidebar>
                    <MenuIcon />
                </Sidebar> :
                <UserSidebar>
                    <MenuIcon/>
                </UserSidebar>
                }
               
            </IconButton>
            <Typography variant='h6' style={{flexGrow:1}}></Typography>
            {
                user_data?<Button onClick={logout}>Logout</Button> : <Button>Login</Button>
            }
            
            <IconButton component={Link} to="/profile">
                <AccountCircleRoundedIcon/>
            </IconButton>
        </Toolbar>
    </Container>
     
  )
}

export default Navbar