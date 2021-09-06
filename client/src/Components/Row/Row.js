import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";
import AddCommentForm from "../CommentForm/AddCommentForm";

const base_url = "https://image.tmdb.org/t/p/original/";

// prettier-ignore
function Row ( { title, fetchUrl, isLargeRow, user } ) {
  const [ movies, setMovies ] = useState( [] )
  const [ addComment, setAddComment ] = useState( false )
  const [ movieId, setMovieId ] = useState( null )
  const [displayTitle, setDisplayTitle] = useState(null)
  
  // console.log('ROW COMPONENT', movies)


  useEffect(() => {
    async function fetchData () {
      const request = await axios.get( fetchUrl )
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [ fetchUrl ] )

  function handleClick ( e ) {
    e.stopPropagation()
    setMovieId(e.target.id)
    setAddComment( !addComment )
  }

  // const newMovieCollectionCard = {
  //   movie_db_id: movieId,
  //   collection_id: 'integer',
  //   movie_db_image: 'string'
  // }

  // function handleAddMovieToMovieCollections () {
  //   fetch( '/movie_collections', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newMovieCollectionCard)
  //   })
  // }

// prettier-ignore
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(movie => (
          <React.Fragment key={movie.id}>
            {/* <button onSubmit={handleAddMovieToMovieCollections}>Add To Collections</button> */}
            <img
              onClick={handleClick}
              id={movie.id}
              className={`row_poster ${ isLargeRow && "row_posterLarge" }`}
              src={`${ base_url }${ isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
              title={movie?.title}
              onMouseOver={() => setDisplayTitle(movie?.title || movie?.name || movie?.original_name)}
              onMouseLeave={() => setDisplayTitle(!displayTitle)}
            />
          </React.Fragment>
        ) )}
        

      </div>
      
      {displayTitle ? <h1 className="display-title-mouseOver">{displayTitle}</h1> : null}

      {addComment ? <AddCommentForm movies={movies} user={user} movieId={movieId} /> : null}
    </div>
  )
}

export default Row;
