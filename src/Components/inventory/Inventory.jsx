import { Container, FormControl, Stack } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TableInventory from './TableInventory';
const Input = styled('input')({
  display: 'none',
});

const Inventory = () => {
  return (
    <Container>
      <Stack direction="row" style={{display:"flex",justifyContent:"space-evenly",marginBottom:'20px'}}>

        <TextField id="outlined-basic" label="product name" variant="outlined" />
        <TextField id="outlined-basic" label="quantity" variant="outlined" type="Number"/>
         <TextField id="outlined-basic" label="price" variant="outlined" type="Number"/>
      <label htmlFor="contained-button-file" >
         <Input accept="image/*" id="contained-button-file" multiple type="file" />
         <Button variant="contained" component="span" >
           Upload
         </Button>
      </label>

      <Button variant='contained' >add</Button>
      </Stack>

      <TableInventory />
     
    
 
    </Container>
  )
}

export default Inventory;



  