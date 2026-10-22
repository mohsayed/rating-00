const Rating = () => {
  // Event handlers
  const clicked = (star) => console.log("clicked", star);
  const hovered = (direction) => console.log("hovered", direction);

  // prepare array of items 1 to 5
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  // building items array
  const ratingList = stars.map((star) => (
    <span
      key={star}
      className="star"
      onClick={() => clicked(star)}
      onMouseEnter={() => hovered("enter")}
      onMouseLeave={() => hovered("leave")}
    >
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
