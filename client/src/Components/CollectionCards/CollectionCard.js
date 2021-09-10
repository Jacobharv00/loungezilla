import React, { useState } from "react"
import "./CollectionCard.css"
// import ImageButton from "react-image-button";


function CollectionCard ( { title, movieCollections } ) {
  const [ movieDbId, setMovieDbId ] = useState( null )


  const displayMovies = movieCollections.map( ( movie ) => {
    if ( title === 'Originals' ) {
      return (
        <>
          <img
            className="row_posterL"
            key={ movie.id }
            id={ movie.movie_db_id }
            src={ movie?.movie_db_image }
            alt="movie"
          />
          <button onClick={ ( e ) => {
            setMovieDbId( e.target.previousElementSibling.id )
            deleteMovie( movieDbId )
          } } className="large-img-delete-btn">Delete</button>
        </>
      )
    }
    return (
      <>
        <img
          className="collection-img"
          key={ movie.id }
          id={ movie.movie_db_id }
          src={ movie?.movie_db_image }
          alt="movie"
        />
        <button onClick={ ( e ) => {
          setMovieDbId( e.target.previousElementSibling.id )
          deleteMovie( movieDbId )
        } } className="small-img-delete-btn">Delete</button>
      </>
    )
  } )


  // console.log( movieDbId )

  const deleteMovie = () => {
    fetch( `/movie_collections/${movieDbId}`, {
      method: 'DELETE'
    } )
  }


  return (
    <div className="collection-row">
      <h1 className="collection-title">{ title }</h1>
      { displayMovies }
    </div>
  )
}


export default CollectionCard

