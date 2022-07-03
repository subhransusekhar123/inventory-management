import { Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from '../Sidebar/Sidebar';
import { Link } from "react-router-dom";
import Profile from '../profile/Profile';
import UserSidebar from '../Sidebar/UserSidebar';


const Navbar = () => {
    let isAdmin = false ;
    let getData =JSON.parse( localStorage.getItem('setData') )
    let user_data = getData?.user;
    if(user_data === "admin"){
        isAdmin = true
    }else{
        isAdmin= false
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
            <Button>Logout</Button>
            <IconButton component={Link} to="/profile">
                <AccountCircleRoundedIcon/>
            </IconButton>
        </Toolbar>
    </Container>
     
  )
}

export default Navbar