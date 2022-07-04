import { Container, FormControl, Stack } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TableInventory from './TableInventory';
import axios from 'axios';

const Input = styled('input')({
  display: 'none',
});

const Inventory = () => {
  const [inventoryData, setInventoryData] = React.useState({
    name:"",
    quantity:0,
    price:0
  })
  const [image,setImage] = React.useState("")

  const changeHandler = (e) => {
    setInventoryData({
      ...inventoryData,[e.target.name]:e.target.value
    })
  }

  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }

  const configAxios = {
    headers: {
        'content-type': 'multipart/form-data',
    }
}

const data = new FormData() 

  const clickHandler = () => {
   data.append("name",inventoryData.name);
   data.append("quantity",inventoryData.quantity);
   data.append("price",inventoryData.price);
   data.append("image",image);


    axios.post("http://localhost:8900/product/upload",data,configAxios)
    .then((data)=>{
      alert("data saved")
    })
    .catch((err)=>{
      console.log(err)
    })
    console.warn(inventoryData,image.name)
  }

  
  return (
    <Container>
      <Stack direction="row" style={{display:"flex",justifyContent:"space-evenly",marginBottom:'20px'}}>

        <TextField id="outlined-basic" label="product name" variant="outlined" name='name' onChange={ changeHandler } />
        <TextField id="outlined-basic" label="quantity" variant="outlined" type="Number" name="quantity" onChange={ changeHandler } />
        <TextField id="outlined-basic" label="price" variant="outlined" type="Number" name="price" onChange={ changeHandler } />
         <label htmlFor="contained-button-file" >
         <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={ imageHandler }/>
         <Button variant="contained" component="span" >
           Upload
         </Button>
        </label>
      <Button variant='contained' onClick={clickHandler}>add</Button>
      </Stack>

      <TableInventory />
    
    </Container>
  )
}

export default Inventory;



  