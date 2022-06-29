import { Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from '../Sidebar/Sidebar';

const Navbar = () => {
  return (
    <Container>
        <Toolbar style={{marginBottom:"40px"}}>
            <IconButton color="inherit">
                <Sidebar>
                    <MenuIcon />
                </Sidebar>
            </IconButton>
            <Typography variant='h6' style={{flexGrow:1}}></Typography>
            <Button>Logout</Button>
            <IconButton>
                <AccountCircleRoundedIcon/>
            </IconButton>
        </Toolbar>
    </Container>
     
        
   
    
  )
}

export default Navbar