// Updated StarRating component

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfStroke as halfStarStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
// importing stars from fontawsome

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;

    if (starValue <= rating) {
      return <FontAwesomeIcon key={index} icon={solidStar} style={{ color: '#FFF44F', fontSize: '16px', marginRight: '2px' }} />;
    } else if (starValue - 0.5 <= rating) { 
      // setting stars depending on the rating value
      return <FontAwesomeIcon key={index} icon={halfStarStroke} style={{ color: '#FFF44F', fontSize: '16px', marginRight: '2px' }} />;
    } else {
      return <FontAwesomeIcon key={index} icon={regularStar} style={{ color: '#FFF44F', fontSize: '16px', marginRight: '2px' }} />;
    }
  });

  return <div>{stars}</div>;
};

export default StarRating;
