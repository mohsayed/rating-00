import { useState } from "react";

const Rating = () => {
  // state
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // prepare array of items 1 to 5
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  // building items array
  const ratingList = stars.map((star) => (
    <span
      key={star}
      className="star"
      onClick={() => setRating(star)}
      onMouseEnter={() => setHover(star)}
      onMouseLeave={() => setHover(0)}
    >
      {"\u2605"}
    </span>
  ));

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">{ratingList}</div>
      <p>Rating is : {rating} </p>
      <p>Hover: {hover}</p>
    </div>
  );
};

export default Rating;
