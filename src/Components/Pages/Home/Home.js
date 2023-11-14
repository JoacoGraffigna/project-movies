import axios from "axios";
import React, { useEffect,useState } from "react";
import CardMovie from "../../Common/cardMovie/CardMovie";
import Header from "../../Common/header/Header";
import styles from "./Home.module.css"
import confetti from 'canvas-confetti'
import {Button} from "@mui/material";
import CreateMovieModal from '../../Common/Modal/CreateMovieModal'


const Home = () => {
    const [movies, setmovies] = useState([]);
    const [dispatchLike, setdispatchLike] = useState(false);
    const [Favorite, setFavorite] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose= () =>setOpen(false)
    const [isMovieCreated, setIsMovieCreated] = useState(false)
    const [isMovieDeleted, setIsMovieDeleted] = useState(false)



    useEffect(() => {
    axios.get("https://crud-movies-app.onrender.com/movies")
    .then(res => setmovies(res.data))
    .catch(err => console.log(err));
    
    setdispatchLike(false)
    setIsMovieCreated(false)
    setIsMovieDeleted(false)
     
  }, [dispatchLike,isMovieCreated,isMovieDeleted]);


    const handleLike= (movie) =>{
      
      if (!movie.isLiked) {
        confetti({
            zIndex:999,
            particleCount:100,
            spread:160,
            angle:-100,
            origin:{
              x:0.5,
              y:0
            }
        })
      }
      
      
      
      axios.patch(`https://crud-movies-app.onrender.com/movies/${movie.id}`,{isLiked: !movie.isLiked,
    })
      .then(res=>setdispatchLike(true))
      .catch(err=>console.log(err))

    }
    const MoviesFiltered = movies.filter(movie=>movie.isLiked)

    const deletedMovieById =(id)=>{
      axios.delete(`https://crud-movies-app.onrender.com/movies/${id}`)
      .then(res=>setIsMovieDeleted(true))
      .catch(err=>console.log(err))
    }




  return (
    <>
        <Header setFavorite={setFavorite}/>
        <div style={
          {
            backgroundColor:"black"
          }
        }>
        <Button style={{background:"white"}} onClick={handleOpen}>Create movie</Button>
        </div>
        
        <CreateMovieModal setIsMovieCreated={setIsMovieCreated}  open={open} handleClose={handleClose} ></CreateMovieModal>
        <div className={styles.containerCards}>
            {
                !Favorite ? (
                  movies.map((movie)=>{
                  return(
                    <CardMovie deletedMovieById={deletedMovieById} handleLike={handleLike} movie={movie} key={movie.id}/>
                  );
                })
                ): (
                  MoviesFiltered.map((movie)=>{
                  return(
                    <CardMovie deletedMovieById={deletedMovieById} handleLike={handleLike} movie={movie} key={movie.id}/>
                  );
                })
                )
            }

        </div>
    </>
  );
};
    
export default Home


//Crud(create read update delete) o Abm(alta baja y modificaciones)
//create(post) read(get) update(put o patch) delete(delete)