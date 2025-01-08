import React, { useEffect, useState, useContext } from 'react';
import axiosInstance from '../Api/config'
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite,clearFavorites } from '../Store/slices/counter'; 
import { LanguageContext } from '../Context/LanguageContext';


function Movie() {

  const navigate = useNavigate();
  const [movieList,setmovieList]=useState([]);
  const dispatch = useDispatch(); //23del 3aleha 
  const favoriteMovies = useSelector((state) => state.favoritemovie.favoriteMovies); // Access favorites b selector

  const { lang } = useContext(LanguageContext);
  console.log(movieList)


  const translations = {
    en: {
      language: "Language",
      rating: "Rating",
      releaseDate: "Release Date",
      view: "View",
    },
    ar: {
      language: "اللغة",
      rating: "التقييم",
      releaseDate: "تاريخ الإصدار",
      view: "عرض",
    },
  };

  const t=translations[lang];

  const getMovei=(lang)=>{
      axiosInstance
       .get(`https://api.themoviedb.org/3/discover/movie?api_key=9cbcf1d99531e0f449eeebe0eddca902&language=${lang}` )
       .then(res=>setmovieList(res.data.results))
       .catch((err) => console.error(err));
       
  }

    useEffect(()=>{
      getMovei(lang);
    },[lang])//3l4an y refresh lma el language tt8yar

    const handleViewDetails = (movie) => {
      navigate(`/movie-details/${movie.id}`,{ state: { movieData: movie } }); 
    };

  
   
     
    const toggleLike = (movie) => {
      //kda ba3t el moie ll reducer b el dispatch 3l4an t check 3leha 
       dispatch(toggleFavorite(movie));
    };




  return (
   
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4">
    {movieList.map((movie)=>(


  // < to={`/movie-details/${movie.id}`} >
    <div  key={movie.id} className="col" style={{ textDecoration: 'none' }}>
      <Card  style={{ width: '380px', height: '600px', marginLeft: '10px', marginTop: '10px',padding:"13px" }}>
       <Card.Img
           style={{ textAlign: 'center' ,height:"350px"}}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
         <Card.Body>
          
         <Card.Title style={{ fontSize: '18px' }}>{movie.title}</Card.Title>
         <Card.Text style={{ fontSize: '15px' }}>{t.language}:{movie.original_language}</Card.Text>
         <div>
         <FontAwesomeIcon icon={faHeart} size="lg"
                    style={{
                      color:favoriteMovies.some((m) => m.id === movie.id) ? 'green' : 'gray',
                      cursor: 'pointer',
                      float:'right',
                        
                    }}
                    onClick={()=>toggleLike(movie)}
                  />
            <Card.Text style={{ fontSize: '15px' }}>{t.rating}: {movie.vote_average}</Card.Text>
         </div>
         <Card.Text style={{ fontSize: '15px' }}>{t.releaseDate}: {movie.release_date}</Card.Text>
        
         <div>
         <button className="btn btn-primary"style={{marginRight: '75px'}}  onClick={() => handleViewDetails(movie)} >{t.view} </button>
         
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