import React, { useEffect, useState } from "react";
import "./CommentsPage.css";

// prettier-ignore
function CommentsPage () {
  const [allComments, setAllComments] = useState([])
  
  useEffect(() => {
    fetch( '/comments' )
      .then( resp => resp.json() )
    .then(data => setAllComments(data))
  }, [] )
  
  console.log( allComments )
  
  const displayComments = allComments.map( comment => {
    return (
      <ul className="styled" key={comment.id}>
        <li >{comment.comment}</li>
        
      </ul>
    )
  })

  return (
    <div className="comment-container">{displayComments}</div>
  )
}

export default CommentsPage;
