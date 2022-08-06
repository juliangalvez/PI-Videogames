import React from "react";

export default function Card({ name, image, genres }) {
  return (
    <div>
      <div>
        <h4>{name}</h4>
      </div>
      <div>
        <img src={image} alt="img" />
      </div>
      <div>
        <h1>{genres}</h1>
      </div>
    </div>
  );
}
