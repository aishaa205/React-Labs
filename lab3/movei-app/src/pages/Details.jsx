import React, { useEffect, useState } from "react";
import { useLocation ,useParams} from "react-router-dom";
import axios from 'axios';
import "./Details.css"
function Details() {
  //de kda gwaha el id
  const { id } = useParams();
  // const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(location.state?.movieData || {});


   if (!movieDetails) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    fetchMovieDetails(id);
  }, [id]);

  const fetchMovieDetails = (id) => {
    // Use axios to fetch movie details
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=9cbcf1d99531e0f449eeebe0eddca902`)
      .then((response) => {
        setMovieDetails(response.data);  
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);  
      });
  };
  
 
    return (
   <>
   <div>
      <div>
      <img 
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} 
        alt={movieDetails.title} 
        style={{float:"left",width: '300px'}}
      />
      </div>
      
      <div className="details-content">
        <h2>{movieDetails.title}</h2>
        <p >Popularity: {movieDetails.popularity}</p>
        <div style={{ marginBottom: '15px' }}>
          <h5>Overview:</h5>
          <p >{movieDetails.overview}</p>
        </div>

        <p>Language:{movieDetails.original_language}</p>
        <p>Release Date:{movieDetails.release_date}</p>
        <p>Rating:{movieDetails.vote_average}</p>
      </div>
    </div>
    
   
   </>
  )
}

export default Details