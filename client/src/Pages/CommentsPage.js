import React, { useState, useEffect } from "react"
import "./CommentsPage.css"


function CommentsPage ( { movieId } ) {
  const [ allComments, setAllComments ] = useState( [] )

  // console.log('COMMENTS PAGE', movieId)


  useEffect( () => {
    fetch( `/comments/${movieId}` )
      .then( resp => resp.json() )
      .then( data => setAllComments( data ) )
  }, [ movieId ] )


  const displayComments = allComments.map( comment => {
    return (
      <ul className="styled-ul" key={ comment.id }>
        <li className="styled-li">{ comment.comment }</li>
      </ul>
    )
  } )

  return (
    <div className="comment-container">{ displayComments }</div>
  )
}

export default CommentsPage
