import React, { useState, useEffect } from "react"
import axios from "../../axios"
import "./Row.css"
import AddCommentForm from "../CommentForm/AddCommentForm"
// import ImageButton from "react-image-button"

const base_url = "https://image.tmdb.org/t/p/original/"


function Row ( { title, fetchUrl, isLargeRow, user, id } ) {
  const [ movies, setMovies ] = useState( [] )
  const [ addComment, setAddComment ] = useState( false )
  const [ movieId, setMovieId ] = useState( null )
  const [ displayTitle, setDisplayTitle ] = useState( null )


  useEffect( () => {
    async function fetchData () {
      const request = await axios.get( fetchUrl )
      setMovies( request.data.results )
      return request
    }
    fetchData()
  }, [ fetchUrl ] )

  function handleClick ( e ) {
    e.stopPropagation()
    setMovieId( e.target.id )
    setAddComment( !addComment )
  }

  function getMovieAttributes ( e ) {
    const newMovieCollectionCard = {
      movie_db_id: e.target.nextElementSibling.id,
      collection_id: id,
      movie_db_image: e.target.nextElementSibling.src,
      user_id: user.id
    }
    addMovieToMovieCollections( newMovieCollectionCard )
  }



  function addMovieToMovieCollections ( newMovieCollectionCard ) {
    fetch( `/movie_collections`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( newMovieCollectionCard )
    } )
  }


  return (
    <div className="row">
      <h2 id={ id }>{ title }</h2>
      <div className="row_posters">
        { movies.map( movie => (
          <React.Fragment key={ movie.id }>
            <button className="add-to-collections-btn" onClick={ getMovieAttributes }>Add to Collections</button>
            <img
              onClick={ handleClick }
              id={ movie.id }
              className={ `row_poster ${isLargeRow && "row_posterLarge"}` }
              src={ `${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}` }
              alt={ movie.name }
              title={ movie?.title }
              onMouseEnter={ () => setDisplayTitle( displayTitle ) }
              onMouseLeave={ () => setDisplayTitle( !displayTitle ) } />
          </React.Fragment>
        ) ) }
      </div>
      { addComment ? <AddCommentForm movies={ movies } user={ user } movieId={ movieId } /> : null }
    </div>
  )
}

export default Row

