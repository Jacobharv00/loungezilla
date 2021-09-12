import React, { useState, useEffect } from "react"
import "./CommentsPage.css"

// movieId
function CommentsPage ( { id } ) {
  const [ allComments, setAllComments ] = useState( [] )

  // console.log('COMMENTS PAGE', movieId)


  // useEffect( () => {
  //   fetch( `/comments/${movieId}` )
  //     .then( resp => resp.json() )
  //     .then( data => setAllComments( data ) )
  // }, [ movieId ] )

  useEffect( () => {
    fetch( `/comments/${id}` )
      .then( resp => resp.json() )
      .then( data => setAllComments( data ) )
  }, [ id ] )


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
