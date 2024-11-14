import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './assets/search.svg';
import MovieCard from './MovieCard';

//84067a49 api key

const API_URL ='http://www.omdbapi.com?apikey=84067a49';


const App = () =>{

  const [movies, setmovies]=useState([]);
  const [searchTerm, setsearchTerm]=useState("");


  useEffect(()=>{
    searchMovies("Batman");
  },[]);

  const searchMovies = async(title) =>{
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setmovies(data.Search);
  }

  return(
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
          <input 
            placeholder='Search for movies'
            value= {searchTerm}
            onChange={(e)=>setsearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={()=>searchMovies(searchTerm)}
          />
      </div>
      {
          movies?.length > 0
          ? (
            <div className='container'>
               {movies.map((movie)=> (
                  <MovieCard movie={movie}/>
               ))}
            </div>
          ) :
          (
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )
      }
    </div>
    
  );
}

export default App




//const App = () => {
  //   const [Count ,setCount]=useState(0);
  
  //   useEffect(()=>{
  //     setCount(100);
  //   },[]); //here in [] whatever variable we write the useeffect will run when any change is done on that variable.
    
  //   return (
  //     <div>
  //       <button onClick={()=> setCount((prevCount) => prevCount -1) }>-</button>
  //       <h1>{Count}</h1>
  //       <button onClick={() => setCount((prevCount)=>prevCount + 1)}>+</button>
  //     </div>
  //   );
  // }
  