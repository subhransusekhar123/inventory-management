import { Badge, Divider, IconButton, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TemporaryDrawer from "./SideDrawer";

const useStyle = makeStyles(()=>({
    title:{
        flexGrow:1
    }
}))

const Header = () => {
    let classes = useStyle()
  return (
    <div>
      <Toolbar>
            <TemporaryDrawer>
                <IconButton color="inherit">
                        <MenuIcon />
                </IconButton>
            </TemporaryDrawer>

        <Typography variant="h6" className={classes.title}>Blogging website</Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Toolbar>Express your emotions through words</Toolbar>
    </div>
  );
};

export default Header;
