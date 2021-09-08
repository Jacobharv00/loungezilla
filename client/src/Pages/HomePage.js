import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Row from "../Components/Row/Row";
import requests from "../requests";
import Banner from "../Components/Banner/Banner";

// prettier-ignore
function HomePage ( { user } ) {
  const [movieCollections, setMovieCollections] = useState([])

  
  useEffect(() => {
    fetch( '/collections' )
      .then( resp => resp.json() )
      .then(data => setMovieCollections(data))
  }, [])

  const collectionIds = movieCollections.map( collection => {
    return collection.id
  })

  const comedyCollectionId = collectionIds[0]
  const romComCollectionId = collectionIds[1]
  const documentaryId = collectionIds[2]
  const actionMoviesId = collectionIds[3]

  // prettier-ignore
  return (
    <div className="homepage">
      <Banner />
      <Row user={user} title="ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row user ={user} title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Row user ={user} title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row user={user} title="Action Movies" id={actionMoviesId} fetchUrl={requests.fetchActionMovies} />
      <Row user={user} title="Comedy Movies" id={comedyCollectionId} fetchUrl={requests.fetchComedyMovies} />
      <Row user={user} title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row user={user} title="Romance Movies" id={romComCollectionId} fetchUrl={requests.fetchRomanceMovies} />
      <Row user={user} title="Documentaries" id={documentaryId} fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomePage;
