import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Row.css";
import AddCommentForm from "../CommentForm/AddCommentForm";

const base_url = "https://image.tmdb.org/t/p/original/";

// prettier-ignore
function Row ( { title, fetchUrl, isLargeRow, user } ) {
  const [ movies, setMovies ] = useState( [] )
  const [ addComment, setAddComment ] = useState( false )
  const [ movieId, setMovieId ] = useState(null)

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
    setMovieId(e.target.nextSibling.id)
    setAddComment(!addComment)
  }


  
// prettier-ignore
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(movie => (
          <React.Fragment key={movie.id}>
            <button onClick={handleClick} className="comment-btn">{!addComment ? 'Add Comment' : 'X'}</button>
            <img
              id={movie.id}
              className={`row_poster ${ isLargeRow && "row_posterLarge" }`}
              src={`${ base_url }${ isLargeRow ? movie.poster_path : movie.backdrop_path }`}
              alt={movie.name}
            />
          </React.Fragment>
        ))}
        </div> 
      
      {addComment ? <div> <AddCommentForm movies={movies} user={user} movieId={movieId}/> </div> : null}

    </div>
  )
        
}

export default Row;
