import React from "react";
import "./CollectionCard.css";

function CollectionCard({ title, image, movieDbId, collectionId }) {
  return (
    <div className="collection-card">
      <h1 className="collection-title">{title}</h1>
      <img className="collection-img" src={image} alt="movie" />
    </div>
  );
}

export default CollectionCard;
