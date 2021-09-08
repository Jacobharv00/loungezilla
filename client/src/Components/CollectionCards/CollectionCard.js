import React from "react";
import "./CollectionCard.css";

function CollectionCard({ title, movieCollection }) {
  const displayMovies = movieCollection.map((movie) => {
    return (
      <img
        className="collection-img"
        key={movie.id}
        src={movie?.movie_db_image}
        alt="movie"
      />
    );
  });

  return (
    <div className="collection-row">
      <h1 className="collection-title">{title}</h1>
      {displayMovies}
    </div>
  );
}

export default CollectionCard;
