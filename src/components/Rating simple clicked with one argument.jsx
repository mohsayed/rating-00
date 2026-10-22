const Rating = () => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const clicked = (star) => console.log("clicked", star);
  
  const ratingList = stars.map((star) => (
    <span key={star} className="star" onClick={() => clicked(star)}>
      {"\u2605"}
    </span>
  ));

  return (
    <div className="rating-container">
      <h2>Rate Your Experience</h2>
      <div className="stars">{ratingList}</div>
    </div>
  );
};

export default Rating;
