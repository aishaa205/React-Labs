import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite ,clearFavorites} from "../Store/slices/counter";  
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Favourite() 
{
  const favoriteMovies = useSelector((state) => state.favoritemovie.favoriteMovies);
  const dispatch = useDispatch();

  const toggleLike = (movie) => {
        //kda ba3t el moie ll reducer b el dispatch 3l4an t check 3leha 
         dispatch(toggleFavorite(movie));
      };
  
  return (
    
    <>
    <div className="row row-cols-1 row-cols-md-3 g-4">
    {favoriteMovies.map((movie)=>(
  // < to={`/movie-details/${movie.id}`} >
    <div  key={movie.id} className="col" style={{ textDecoration: 'none' }}>
      <Card  style={{ width: '380px', height: '600px', marginLeft: '10px', marginTop: '10px',padding:"13px" }}>
       <Card.Img
           style={{ textAlign: 'center' ,height:"350px"}}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
         <Card.Body>
          
         <Card.Title style={{ fontSize: '18px' }}>{movie.title}</Card.Title>
         <Card.Text style={{ fontSize: '15px' }}>Language: {movie.original_language}</Card.Text>
         <div>
         <FontAwesomeIcon icon={faHeart} size="lg"
                    style={{
                      color:favoriteMovies.some((m) => m.id === movie.id) ? 'green' : 'gray',
                      cursor: 'pointer',
                      float:'right',
                        
                    }}
                    onClick={()=>toggleLike(movie)}
                  />
            <Card.Text style={{ fontSize: '15px' }}>Rating: {movie.vote_average}</Card.Text>
         </div>
         <Card.Text style={{ fontSize: '15px' }}>Release Date: {movie.release_date}</Card.Text>
        
         <div>
         <button className="btn btn-primary"style={{marginRight: '75px'}}  onClick={() => handleViewDetails(movie)} >View </button>
         <button className="btn btn-primary" >Add to watch list</button>
         {/* <button
          className="btn btn-success"
          onClick={() => navigate("/favorites")} >
          View Favorites
        </button> */}
          
          </div>
         

        </Card.Body>
       </Card>

       </div> 
    
      
      ))}
    </div>
    </>
);
}
