import React, { useEffect, useState } from "react"
import "./HomePage.css"
import Row from "../Components/Row/Row"
import requests from "../requests"
import Banner from "../Components/Banner/Banner"


function HomePage ( { user } ) {
  const [ movieCollections, setMovieCollections ] = useState( [] )


  useEffect( () => {
    fetch( '/collections' )
      .then( resp => resp.json() )
      .then( data => setMovieCollections( data ) )
  }, [] )

  const collectionIds = movieCollections.map( collection => {
    return collection.id
  } )

  const originalsId = collectionIds[ 0 ]
  const trendingId = collectionIds[ 1 ]
  const topRatedId = collectionIds[ 2 ]
  const actionMoviesId = collectionIds[ 3 ]
  const comedyId = collectionIds[ 4 ]
  const horrorsId = collectionIds[ 5 ]
  const romanceId = collectionIds[ 6 ]
  const documentaryId = collectionIds[ 7 ]



  return (
    <div className="homepage">
      <Banner />
      <Row user={ user } title="ORIGINALS" id={ originalsId } fetchUrl={ requests.fetchNetflixOriginals } isLargeRow />
      <Row user={ user } title="TRENDING" id={ trendingId } fetchUrl={ requests.fetchTrending } />
      <Row user={ user } title="Top Rated" id={ topRatedId } fetchUrl={ requests.fetchTopRated } />
      <Row user={ user } title="Action Movies" id={ actionMoviesId } fetchUrl={ requests.fetchActionMovies } />
      <Row user={ user } title="Comedy Movies" id={ comedyId } fetchUrl={ requests.fetchComedyMovies } />
      <Row user={ user } title="Horror Movies" id={ horrorsId } fetchUrl={ requests.fetchHorrorMovies } />
      <Row user={ user } title="Romance Movies" id={ romanceId } fetchUrl={ requests.fetchRomanceMovies } />
      <Row user={ user } title="Documentaries" id={ documentaryId } fetchUrl={ requests.fetchDocumentaries } />
    </div>
  )
}

export default HomePage
