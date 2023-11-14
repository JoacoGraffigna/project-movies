import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';

const CardMovie = ( {movie, handleLike, deletedMovieById} ) => {
    
  return (
    
    <Card sx={{ width: 300,height:500,}}>
    <CardHeader
      title={movie.name}
      subheader={movie.createdAt}
    />
    <CardMedia
      component="img"
      height="200"
      image={movie.img}
    />
    <CardContent sx={{ height:150 }}>
      <Typography variant="body2" color="text.secondary">
       {movie.description}
      </Typography>
    </CardContent>
    <CardActions sx={{
      display:"flex",
      justifyContent:"space-between"
    }}>
      <IconButton  onClick={()=>handleLike(movie)}>
        <FavoriteIcon   color={movie.isLiked ? "error" : "disable"} />
      </IconButton>
      <Button onClick={()=> deletedMovieById(movie.id)} variant='contained' color='primary'>Delete</Button>
    </CardActions>
    
      
    
  </Card>


  )
}

export default CardMovie
