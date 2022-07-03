import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import CategorySharpIcon from '@mui/icons-material/CategorySharp';
import ProductionQuantityLimitsSharpIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';
import { Link } from "react-router-dom";



const Sidebar = ({children}) => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>

          <ListItem disablePadding component={Link} to="/">
          <ListItemButton>
              <ListItemIcon>
                <MonetizationOnRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="payment" />
        </ListItemButton>
          </ListItem>


          <ListItem disablePadding component={Link} to="/inventory">
            <ListItemButton>
              <ListItemIcon>
                <ProductionQuantityLimitsSharpIcon/>
              </ListItemIcon>
              <ListItemText primary="manage inventory" style={{ color:'black' }}/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="settings" />
            </ListItemButton>
          </ListItem>

      </List>
      <Divider/>
      <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>

        {/* <Link to="/product"> */}
      <ListItem disablePadding component={Link} to="/product" >
            <ListItemButton>
              <ListItemIcon>
                <CategorySharpIcon/>
              </ListItemIcon>
              <ListItemText primary="products" style={{ color:"black" }}/>
            </ListItemButton>
          </ListItem>
        {/* </Link> */}
       
          <ListItem disablePadding component={Link} to="/">
          <ListItemButton>
              <ListItemIcon>
                <MonetizationOnRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="payment" />
        </ListItemButton>
          </ListItem>

          <ListItem disablePadding component={Link} to="/order">
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartRoundedIcon/>
              </ListItemIcon>
              <ListItemText primary="your orders" style={{ color:"black" }}/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="settings" />
            </ListItemButton>
          </ListItem>

      </List>
    </Box>
    </Box>
  );

  return (
    <div>
     
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>{children}</Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
  
    </div>
  );
}
export default Sidebar;