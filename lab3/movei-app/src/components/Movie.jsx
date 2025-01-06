import React, { useEffect, useState } from 'react'
import axiosInstance from '../Api/config'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Details from '../pages/Details';
function Movie() {

  const navigate = useNavigate();
  const [movieList,setmovieList]=useState([]);
 
  
 
  

    const getMovei=()=>{
      axiosInstance
       .get('https://api.themoviedb.org/3/discover/movie?api_key=9cbcf1d99531e0f449eeebe0eddca902' )
       .then(res=>setmovieList(res.data.results))
       .catch((err) => console.error(err));
       
    }

    useEffect(()=>{
      getMovei();
    },[])

    const handleViewDetails = (movie) => {
      navigate(`/movie-details/${movie.id}`,{ state: { movieData: movie } }); 
    };

    console.log(movieList)

  return (
   
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4">
    {movieList.map((movie)=>(


  // < to={`/movie-details/${movie.id}`} >
    <div  key={movie.id} className="col" style={{ textDecoration: 'none' }}>
      <Card  style={{ width: '400px', height: '600px', marginLeft: '10px', marginTop: '10px' }}>
       <Card.Img
           style={{ textAlign: 'center' ,height:"350px"}}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
         <Card.Body>
          
         <Card.Title style={{ fontSize: '18px' }}>{movie.title}</Card.Title>
         <Card.Text style={{ fontSize: '15px' }}>Language: {movie.original_language}</Card.Text>
         <div>

         </div>
         <Card.Text style={{ fontSize: '15px' }}>Release Date: {movie.release_date}</Card.Text>
         <Card.Text style={{ fontSize: '15px' }}>Rating: {movie.vote_average}</Card.Text>
         <div>
         <button className="btn btn-primary"style={{marginRight: '75px'}}  onClick={() => handleViewDetails(movie)} >View </button>
         <button className="btn btn-primary">Add to watch list</button>
          
          </div>
         

        </Card.Body>
       </Card>

       </div> 
    
      
      ))}
    </div>
    </>
  )
}

export default Movie