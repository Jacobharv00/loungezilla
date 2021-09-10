import React, { useState, useEffect } from "react"
import CollectionCard from "../Components/CollectionCards/CollectionCard"
import "./CollectionsPage.css"

function CollectionsPage () {
  const [ collections, setCollections ] = useState( [] )

  useEffect( () => {
    fetch( "/collections" )
      .then( ( resp ) => resp.json() )
      .then( ( data ) => setCollections( data ) )
  }, [] )

  // console.log("Collections Page", collections);

  const displayCollections = collections.map( ( collection ) => {
    return (
      <CollectionCard
        key={ collection.id }
        title={ collection.title }
        movieCollections={ collection.movie_collections }
      />
    )
  } )

  return (
    <div className="display-collections-container">{ displayCollections }</div>
  )
}

export default CollectionsPage
