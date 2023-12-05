import React, { useState } from 'react';
import "./addmovieform.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');

  const handleAddMovie = () => {
    const newMovie = {
      title,
      rating: parseFloat(rating), // convert rating to a number
      description,
      posterURL,
    };

    onAddMovie(newMovie);

    // Reset the form after adding a movie
    setTitle('');
    setRating('');
    setDescription('');
    setPosterURL('');
  };

  return (
    <div className='form'>
        
      <h2><FontAwesomeIcon icon="heart" style={{ color: '#FFFFFF', fontSize: '20px', marginRight: '10px' }} />
Add a Movie<FontAwesomeIcon icon="heart" style={{ color: '#FFFFFF', fontSize: '20px', marginLeft: '10px' }} /></h2>
      <label>Title: </label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Rating: </label>
      <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
      <label>Description: </label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} /><br></br>
      <label>Poster URL: </label>
      <input type="text" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovieForm;
