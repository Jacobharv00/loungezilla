import React, { useState } from "react"
import "./CommentForm.css"
import CommentsPage from "../../Pages/CommentsPage"

//movieId
function AddCommentForm ( { user, id, setAddComment, addComment } ) {
  const [ comment, setComment ] = useState( "" )
  // const [ errors, setErrors ] = useState( [] )
  const [ commentResults, setCommentResults ] = useState( [] )
  const [ showComments, setShowComments ] = useState( false )

  const newComment = {
    user_id: user.id,
    comment: comment,
    movie_db_id: id
  }

  function handleAddComment ( e ) {
    e.preventDefault()
    //setErrors( [] )
    fetch( `/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( newComment ),
    } ).then( setCommentResults( [ ...commentResults, newComment ], setComment( '' ) ) )
  }

  // function handleAddComment ( e ) {
  //   e.preventDefault()
  //   //setErrors( [] )
  //   fetch( `/comments`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify( newComment ),
  //   } ).then( resp => {
  //     if ( resp.ok ) {
  //       resp.json().then( setCommentResults( [ ...commentResults, newComment ], setComment( '' ) ) )
  //     } else {
  //       resp.json().then( ( err ) => setErrors( err.errors ) )
  //     }
  //   } )
  // }


  return (
    <div className="comment-form-div">
      <form onSubmit={ handleAddComment }>
        <input
          className="comment-input"
          placeholder="Write A Comment..."
          type="text"
          value={ comment }
          onChange={ ( e ) => setComment( e.target.value ) }
        />
        <button className="add-comment-btn" type="submit">
          Submit
        </button>

        {/* <div className='comment-errors'>
          { errors ? ( <>
            { errors.map( ( err ) => (
              <div key={ err }>{ err }</div> ) ) }
          </>
          ) : null }
        </div> */}

      </form>

      <button className="close-form-btn" onClick={ () => setAddComment( !addComment ) }>X</button>
      <button className="show-comments-btn" onClick={ () => setShowComments( !showComments ) }>{ showComments ? 'Hide Comments' : 'Show Comments' }</button>

      { showComments ? <CommentsPage id={ id } /> : null }

    </div>
  )
}

export default AddCommentForm
