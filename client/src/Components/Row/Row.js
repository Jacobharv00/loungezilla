import React, { useState, useEffect } from "react"
import axios from "../../axios"
import "./Row.css"
// import AddCommentForm from "../CommentForm/AddCommentForm"
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/"


function Row ( { title, fetchUrl, isLargeRow, user, id } ) {
  const [ movies, setMovies ] = useState( [] )
  // const [ addComment, setAddComment ] = useState( false )
  // const [ movieId, setMovieId ] = useState( null )
  const [ displayTitle, setDisplayTitle ] = useState( null )
  const [ trailerUrl, setTrailerUrl ] = useState( '' )



  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      //  https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  // first setup was movie as parameter
  const handleClick = ( e ) => {
    if ( trailerUrl ) {
      setTrailerUrl( '' )
    } else {
      movieTrailer( null, { tmdbId: e.target.id } )
        //movieTrailer( movie?.name || '' )
        .then( url => {
          const urlParams = new URLSearchParams( new URL( url ).search )
          setTrailerUrl( urlParams.get( 'v' ) )
        } )
        .catch( error => console.log( error ) )
    }
  }


  useEffect( () => {
    async function fetchData () {
      const request = await axios.get( fetchUrl )
      setMovies( request.data.results )
      return request
    }
    fetchData()
  }, [ fetchUrl ] )



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
            <button className="add-to-collections-btn" onClick={ getMovieAttributes }>Add To Collections</button>
            <img
              id={ movie.id }
              //onClick={ () => handleClick( movie ) }
              onClick={ handleClick }
              className={ `row_poster ${isLargeRow && "row_posterLarge"}` }
              src={ `${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}` }
              alt={ movie.name }
              title={ movie?.title }
              onMouseEnter={ () => setDisplayTitle( displayTitle ) }
              onMouseLeave={ () => setDisplayTitle( !displayTitle ) } />
          </React.Fragment>
        ) ) }
      </div>
      { trailerUrl && <Youtube videoId={ trailerUrl } opts={ opts } /> }
    </div>
  )
}

export default Row

