import React from 'react'
import styles from "./Header.module.css"
import {Button, Typography } from '@mui/material'

const Header = ({setFavorite}) => {
  return (
    <div  className={styles.HeaderMovie}> 
      <Typography variant='h4' color="primary"> Movies</Typography>
      
       <div className={styles.DivButton}>
        <Button onClick={()=> setFavorite(false)} variant="contained"color="primary">All</Button>
        <Button onClick={()=> setFavorite(true)} variant="contained" color="primary">Favorites</Button>
        
        </div>
    </div>
  )
}

export default Header
