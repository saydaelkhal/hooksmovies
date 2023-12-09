
import React from 'react';
import{useParams, Link} from 'react-router-dom'
import './moviecard.css';






const Details = ({movie}) => {
        /* useNavigate to navigate to the initial route (back)*/
    // const navigate = useNavigate();

    const {id} = useParams();
    const selectedMovie = movie.find((m) => m.id === +id);
    if (!selectedMovie) {
        return <div>Movie not found</div>;
    }

        return (
    <div>
        <h1 style={{color: "#FF007F"}}>{selectedMovie.title}</h1>
    <p className='descriptiondetails' style={{fontSize:'17px'}}>{selectedMovie.description}</p>
    <iframe
    title="trailer"
    width="590"
    height="415"
    src={selectedMovie.trailerURL}
      
    ></iframe>
    <Link to={'/'}> <button className="social-btn">BACK HOME</button></Link>
      
    </div>
    )
}

export default Details
