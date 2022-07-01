import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles({
  cover:{
    backgroundImage:`url(${"https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/d517ae40ec1a6837fb755d865937ed07.jpg"})`,
    backgroundPosition:"center"
  }
})
const CardKeep = () => {
  const classes = useStyle()
  return (
    <Card className={classes.cover}>
       {/* <CardMedia
        component="img"
        height="194"
        image=""
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant='h5'>
          Lorem ipsum dolor sit amet.
        </Typography>

        <Typography variant='h7'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa at quasi dolor doloribus tempora? Vitae.
        </Typography>

        <Typography variant='p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eius provident laudantium ex distinctio doloribus praesentium reprehenderit amet eaque sequi repudiandae, vel aspernatur ab, dolorum recusandae officiis soluta blanditiis quisquam?
        </Typography>
      </CardContent>

      <CardActions>
        <Button>Read more...</Button>
      </CardActions>
    </Card>
  )
}

export default CardKeep