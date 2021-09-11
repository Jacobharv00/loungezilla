import React, { useState } from "react"
import "./CollectionCard.css"
// import ImageButton from "react-image-button";
import { FaRegTrashAlt } from 'react-icons/fa'



function CollectionCard ( { title, movieCollections } ) {
  const [ movieDbId, setMovieDbId ] = useState( null )
  // const [ collections, setCollections ] = useState( [] )


  const displayMovies = movieCollections.map( ( movie ) => {
    if ( title === 'Originals' ) {
      return (
        <React.Fragment key={ movie.id }>
          <img
            className="row_posterL"
            // key={ movie.id }
            id={ movie.movie_db_id }
            src={ movie?.movie_db_image }
            alt="movie"
          />
          <button onClick={ ( e ) => {
            setMovieDbId( e.target.previousElementSibling.id )
            deleteMovie( movieDbId )
          } } className="large-img-delete-btn"><FaRegTrashAlt className="trash" /></button>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment key={ movie.id }>
        <img
          className="collection-img"
          // key={ movie.id }
          id={ movie.movie_db_id }
          src={ movie?.movie_db_image }
          alt="movie"
        />
        <button onClick={ ( e ) => {
          setMovieDbId( e.target.previousElementSibling.id )
          deleteMovie( movieDbId )
        } } className="small-img-delete-btn"><FaRegTrashAlt className="trash" /></button>
      </React.Fragment>
    )
  } )


  function deleteMovie () {
    fetch( `/movie_collections/${movieDbId}`, {
      method: 'DELETE'
    } )
    // .then( setCollections( collections ) )
  }


  // function handleMovieIdAndDelete (e) {
  //   Promise.resolve()
  //     .then( () => { setMovieDbId(e.target.previousElementSibling.id) } )
  //     .then( () => deleteMovie())
  // }


  return (
    <div className="collection-row">
      <h1 className="collection-title">{ title }</h1>
      { displayMovies }
    </div>
  )
}


export default CollectionCard

