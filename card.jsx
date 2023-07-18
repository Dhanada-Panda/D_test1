import React from "react";

function Card({ imageSrc, title, price, rating }) {
  return (
    <div>
      <img src={imageSrc} alt="error" />
      <h1>{title}</h1>
      <p>{price}</p>
      <p>{rating}</p>
    </div>
  );
}

export default Card;
