import React from "react"
import "./CollectionCard.css"
// import ImageButton from "react-image-button";


function CollectionCard ( { title, movieCollection } ) {
  const displayMovies = movieCollection.map( ( movie ) => {
    return (
      // <ImageButton
      //   key={movie.id}
      //   zoomOnHover={0}
      //   buttonPosition="bottom"
      //   img={<img className="collection-img" src={movie?.movie_db_image} alt="movie" />} >
      //   <button
      //     onClick={() => console.log("HELLO!!!")}
      //     style={{
      //       backgroundColor: "#f5f7dc",
      //       color: "#0f0326",
      //       cursor: "pointer",
      //       border: "none",
      //       padding: "2px",

      //     }}
      //   >
      //     Remove
      //   </button>
      // </ImageButton>

      <img
        className="collection-img"
        key={ movie.id }
        src={ movie?.movie_db_image }
        alt="movie"
      />
    )
  } )

  return (
    <div className="collection-row">
      <h1 className="collection-title">{ title }</h1>
      { displayMovies }
    </div>
  )
}

export default CollectionCard
