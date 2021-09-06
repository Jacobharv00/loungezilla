import React, { useState, useEffect } from "react";
import CollectionCard from "../Components/CollectionCards/CollectionCard";
import "./CollectionsPage.css";

function CollectionsPage() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("/movie_collections")
      .then((resp) => resp.json())
      .then((data) => setCollections(data));
  }, []);

  // console.log("Collections Page", collections);

  const displayCollections = collections.map((movie) => {
    return (
      <CollectionCard
        key={movie.id}
        movieDbId={movie.movie_db_id}
        collectionId={movie.collection.id}
        title={movie.collection.title}
        image={movie.movie_db_image}
      />
    );
  });

  return (
    <div className="display-collections-container">{displayCollections}</div>
  );
}

export default CollectionsPage;
