import './App.css';
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import { movieData } from './movieData';
import SearchMovie from './SearchMovie';

function App() {

  const [movies,setMovies] = useState(movieData);
  const [searchName, setSearchName]=useState("");
  const [searchRating , setSearchRating]=useState("");
  const addHandler =(newMovie)=>{
    setMovies([...movies,newMovie])
  };

  return (
    
    <>
    <div style={{ backgroundImage: 'linear-gradient(35deg, rgb(24, 61, 78) 1%, #1f2127 50%, #1f2127 70%, #1f2127 70%, #474a51 100%)'}}>
    
    <SearchMovie 
    setSearchName={setSearchName}
    setSearchRating ={setSearchRating}
    />

    <MovieList  
    movies ={movies}
    searchName={searchName}
    searchRating ={searchRating} />

    <AddMovie addHandler={addHandler}/>
    </div>
    </>
  );
}

export default App;
