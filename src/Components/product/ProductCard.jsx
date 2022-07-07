import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios';

const useStyle = makeStyles({
    button_style:{
        flex:1
    }
})

const ProductCard = ( { product }) => {
  console.log(product)
  const [quantityButton,setQuantityButton] = React.useState(0);

  let userSId = JSON.parse(localStorage.getItem("setData"))?.id

  let orderData = { 
    user_id:userSId,
    name:product.name,
    image:product.image,
    price:product.price,
    quantity:quantityButton
  }
  const clickHandler = () => {
    axios.post("http://localhost:8900/order/postData",orderData)
    .then((data)=>{alert("data posted")})
    .catch((err)=>console.log(err))
  }

    
    const classes = useStyle()
  return (
    <Container>

           <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <span size="small" color="primary" className={classes.button_style}>
          <Button onClick={()=>{ quantityButton > 0 ? setQuantityButton(quantityButton-1) : 0}}><RemoveIcon/></Button>
          <span>{ quantityButton }</span>
          <Button onClick={()=>{ setQuantityButton(quantityButton+1) }}><AddIcon/></Button>
        </span>

        <Button size="small" color="primary" className={classes.button_style} onClick={clickHandler}>
          add
        </Button>
      </CardActions>
           </Card>
    </Container>
  );
}

export default ProductCard