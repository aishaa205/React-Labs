import React, { useEffect, useState ,useContext} from "react";
import {useParams} from "react-router-dom";
import { LanguageContext } from '../Context/LanguageContext';
import axios from 'axios';
import "./Details.css"



function Details() {


  //de kda gwaha el id
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(location.state?.movieData || {});
  const { lang } = useContext(LanguageContext);

  const translations = {
    en: {
      popularity: "Popularity",
      overview: "Overview",
      language: "Language",
      releaseDate: "Release Date",
      rating: "Rating",
    },
    ar: {
      popularity: "الشعبية",
      overview: "نظرة عامة",
      language: "اللغة",
      releaseDate: "تاريخ الإصدار",
      rating: "التقييم",
    },
  };



  const t = translations[lang];


   if (!movieDetails) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    fetchMovieDetails(id, lang);
  }, [id, lang]);

  const fetchMovieDetails = (id,lang) => {
    // Use axios to fetch movie details
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=9cbcf1d99531e0f449eeebe0eddca902&language=${lang}`)//&language=${lang}
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
        <p >{t.popularity}: {movieDetails.popularity}</p>
        <div style={{ marginBottom: '15px' }}>
          <h5>{t.overview}:</h5>
          <p >{movieDetails.overview}</p>
        </div>

        <p>{t.language}:{movieDetails.original_language}</p>
        <p>{t.releaseDate}:{movieDetails.release_date}</p>
        <p>{t.rating}:{movieDetails.vote_average}</p>
      </div>
    </div>
    
   
   </>
  )
}

export default Details