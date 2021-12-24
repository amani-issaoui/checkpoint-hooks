import React from 'react'
 import Featchered from './Featchered/Featchered'
 import MoviesList from './MovieList/MoviesList';
import Add from './Add/Add'

function home({handleAdd,movies}) {
    return (
        <div>
            
              <Featchered/>
       
       <MoviesList movies={movies} />
       <Add handleAdd={handleAdd}/>
 
        </div>
    )
}

export default home
