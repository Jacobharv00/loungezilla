import React, { useState } from "react";
import "./CommentForm.css";
import CommentsPage from "../../Pages/CommentsPage";

// prettier-ignore
function AddCommentForm ( { user, movieId} ) {
  const [comment, setComment] = useState("");
  const [ errors, setErrors ] = useState( [] );
  const [ commentResults, setCommentResults ] = useState( [] );
  const [showComments, setShowComments ] = useState( false );
  
  const newComment = {
    user_id: user.id,
    comment: comment,
    movie_db_id: movieId
  };

  function handleAddComment(e) {
    e.preventDefault();
    setErrors([]);
    fetch(`/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    }).then(setCommentResults([ ...commentResults, newComment]))
  }

  return (
    <div className="comment-form-div">
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
      <button onClick={() => setShowComments(!showComments)}>Show Comments</button>
      {showComments ? <CommentsPage movieId={movieId}/> : null}
    </div>
  );
}

export default AddCommentForm;
