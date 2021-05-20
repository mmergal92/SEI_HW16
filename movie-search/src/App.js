import React, {useState} from 'react';
import './App.css';
//IMPORT COMPONENTS
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
//API KEY
  const apiKey="1263f44d";
//STATE
  const [movie, setMovie] = useState(null);
//FUNCTION to getMovies
  const getMovie = async(searchTerm)=>{
    //fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    )
    //parse JSON into object
    const data = await response.json();
    //set Movie state to movie
    setMovie(data)
    console.log(data)
  }
  //New array for Data
  const dataArray = async()=>{
    let random = Math.floor(Math.random()*50)
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${random}`
    )
    const data = await response.json();
    setMovie(data)
  }
  //Use Effect
  // React.useEffect(()=>{getMovie("Clueless")},[])
  React.useEffect(()=>{dataArray()},[])
  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie ={movie}/>
    </div>
  );
}

export default App;
