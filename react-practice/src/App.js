import React from "react";
import { useState,useEffect } from "react";
import "./App.css";
import MovieCard from "./Components/MovieCard";
import SearchIcon from "./Search.svg";
const API_URL = "http://www.omdbapi.com/?apikey=2fb6c33b";
// 2fb6c33b
// const movies = {
//   Title: "Home Sweet Home Alone",
//   Year: "2021",
//   imdbID: "tt11012066",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMDlkMzZiM2EtZDMxZC00ZWUwLTliMDMtMGMzMzE3NTEzMThiXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg",
// };

const App = () => {
  const [movies,setMovies]=useState([]);
  const [searchTerm,setsearchTerm]=useState('');
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const result = await response.json();
    setMovies(result.Search);
  };

  useEffect(() => {
    searchMovies();
  }, []);
  return (
    <div className="app">
      <h1>MOVIE LAND</h1>
      <div className="search">
        <input placeholder="Search For Movies.." onChange={(e) => {setsearchTerm(e.target.value)}} />
        <img src={SearchIcon} alt="search" onClick={() => {{searchMovies(searchTerm)}}} />
      </div>

    {movies?.length>0?
    <div className="container">
      {movies.map((movie,index)=>(
        <MovieCard movies={movie}  key={index}/>

      ))}
  </div>:
  <div className="empty">
    <h2>No Movies found</h2>
  </div>
    }

      
    </div>
  );
};

export default App;
