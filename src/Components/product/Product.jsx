import { Container } from '@mui/material';
import React from 'react';
import ProductCard from './ProductCard';
import axios from 'axios'


const Product = () => {
  const [data,setData] = React.useState([])



  const getDataHandler = () => {
    axios.get("http://localhost:8900/product/").then((data)=>{
      setData(data.data)
    })
    .catch((err)=>console.log(err))
  }

  React.useEffect(()=>{
    getDataHandler()
  }
    ,[]
  )

  return (
 
      <div>
        {
          data.map((product)=>{
            return <ProductCard product={ product }/>
          })
        }
    

      </div>

  )
}

export default Product