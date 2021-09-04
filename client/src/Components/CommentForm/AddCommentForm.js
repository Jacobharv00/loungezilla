import React, { useState, useEffect } from "react";
import "./CommentForm.css";

// prettier-ignore
function AddCommentForm ( { user, movieId} ) {
  const [comment, setComment] = useState("");
  const [ errors, setErrors ] = useState( [] );
  const [ commentResults, setCommentResults ] = useState([]);
  

  const newComment = {
    user_id: user.id,
    comment: comment,
    movie_db_id: movieId
  };

  function handleAddComment(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    } ).then( setCommentResults( [ ...commentResults, newComment ] ) );
  }








  const displayComments = commentResults.map( (comment, index) => {
    return (
      <article key={index}>
        <p>{comment.comment}</p>
      </article>
    )
  })


  return (
    <div className="comment-form-div">
      {displayComments}
      <form onSubmit={handleAddComment}>
        <input
          className="comment-input"
          placeholder="Write A Comment..."
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        

        <button className="add-comment-btn" type="submit">
          Submit
        </button>
      </form> 

      <div>
        {errors.map((err) => (
          <div className="comment-errors" key={err}>
            {err}
          </div>
        ))}
      </div>

    

    
    </div>
  );
}

export default AddCommentForm;
