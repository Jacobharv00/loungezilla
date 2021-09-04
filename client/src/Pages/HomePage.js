import React from "react";
import "./HomePage.css";
import Row from "../Components/Row/Row";
import requests from "../requests";
import Banner from "../Components/Banner/Banner";

// prettier-ignore
function HomePage ({user}) {
  
  // prettier-ignore
  return (
    <div className="homepage">
      <Banner />
      <Row user={ user } title="ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row user = { user } title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Row user = { user } title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row user={ user } title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row user={ user } title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row user={ user } title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row user={ user } title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row user={ user } title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomePage;
