import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import { useFormik } from 'formik';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding: 4,
  
};




const CreateMovieModal = ({open,handleClose,setIsMovieCreated}) => {


  let initialValues={
    name: "",
    description: "",
    createdAt: "",
    img: ""
  }

  const onSubmit= (data)=>{
    let arg={
      name:data.name,
      description:data.description,
      img:data.img,
      createdAt:data.createdAt,
      isLiked:false
    }

    axios.post("https://crud-movies-app.onrender.com/movies", arg)
    .then(res=> {handleClose() 
    setIsMovieCreated(true)} )
    .catch(err=>console.log(err))
  }

  const {handleChange,handleSubmit} = useFormik({
      initialValues,
      //validationSchema,
      onSubmit
    })



  return (
    <div>
      <Modal
      
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
          <form style={{
              display:'flex',
              flexDirection:'column',
              justifyContent:'center',
              alignItems:'center',
              height:"400px",
              
          }}
          

          onSubmit={handleSubmit}
          >


<Typography color="primary" id="modal-modal-title" variant="h6">
      Create movie
    </Typography>

<TextField onChange={handleChange} name='name' margin='normal' fullWidth id="outlined-basic" label="Titulo de la pelicula" variant="outlined" />
<TextField onChange={handleChange} name='description' margin='normal' fullWidth id="outlined-basic" label="Description" variant="outlined" />
<TextField onChange={handleChange} name="img"  margin='normal' fullWidth id="outlined-basic" label="Img Url" variant="outlined" />
<TextField onChange={handleChange} name="createdAt" margin='normal' fullWidth id="outlined-basic" label="Creation date" variant="outlined" />


<Button type='submit' variant='contained' color="primary">Create</Button>

       
          </form>
          
        </Box>
      </Modal>
    </div>
  )
}

export default CreateMovieModal
