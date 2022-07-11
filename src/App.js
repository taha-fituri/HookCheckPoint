import "./App.css";
import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
// import Filter from "./Components/Filters/Filter";
// import Modal1 from "./Components/Modal/Modal";
import MovieList from "./Components/MovieComponents/MovieList";
import { moviesData } from "./Sources/MovieData";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filterName, setFilterName] = useState("");
  const [filterRate, setFilterRate] = useState(1);
  return (
    <div className="App">
      <NavBar
        filterName={filterName}
        filterRate={filterRate}
        setFilterName={setFilterName}
        setFilterRate={setFilterRate}
        moviesData={movies}
        moviesfun={setMovies}
      />
      <div className="movielist">
        <MovieList
          moviesData={movies}
          filterName={filterName}
          filterRate={filterRate}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
