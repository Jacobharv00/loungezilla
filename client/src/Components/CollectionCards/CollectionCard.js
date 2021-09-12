import React, { useState } from "react"
import "./CollectionCard.css"
import { FaRegTrashAlt } from 'react-icons/fa'
import AddCommentForm from '../CommentForm/AddCommentForm'


function CollectionCard ( { title, movieCollections, user } ) {
  const [ movieDbId, setMovieDbId ] = useState( null )
  const [ addComment, setAddComment ] = useState( false )
  const [ id, setId ] = useState( null )



  function handleClick ( e ) {
    setId( e.target.id )
    setAddComment( !addComment )
  }


  const displayMovies = movieCollections.map( ( movie ) => {
    if ( title === 'Originals' ) {
      return (
        <React.Fragment key={ movie.id }>

          <img
            className="row_posterL"
            // key={ movie.id }
            id={ movie.movie_db_id }
            src={ movie?.movie_db_image }
            alt="Movie"
            onClick={ handleClick }
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
          alt="Movie"
          onClick={ handleClick }
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
  }




  return (
    <div className="collection-row">
      <h1 className="collection-title">{ title }</h1>
      { displayMovies }
      { addComment ? <AddCommentForm user={ user } id={ id } setAddComment={ setAddComment } addComment={ addComment } /> : null }
    </div>
  )
}


export default CollectionCard

