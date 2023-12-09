// MovieCard.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'; 
import StarRating from './StarRating'; // Import the StarRating component
import './moviecard.css';
import { Link } from 'react-router-dom';


const MovieCard = ({ movie }) => {
  return (
    <>
      <body>
        <br />
        <br />
        <br />
        <div className="wrapper">
          <div className="main_card">
            <div className="card_left">
              <div className="card_datails">
                <h1>{movie.title}</h1>
                <div className="card_cat">
                  <p className="PG">
                    <StarRating rating={movie.rating} />
                    {movie.rating}
                  </p>
                
                </div>
                
                <div className="social-btn">
                
                    <button>
                      <FontAwesomeIcon icon={faPlay} />
                      <Link to={`/details/${movie.id}`} style={{color:'#fff'}}> SEE TRAILER</Link>
                  {/* the link is clickible ;) */}
                    </button>
                
                </div>
              </div>
            </div>
            <div className="card_right">
              <div className="img_container">
                <img src={movie.posterURL} alt="" />
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default MovieCard;
