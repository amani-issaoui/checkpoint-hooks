import React from 'react'
import Movie from './Movie'

function MoviesList({movies}) {
    return (
        <div className="contenu-movie">
            {movies.map((el,i)=><Movie key={i} title={el.title} description={el.description} posterUrl={el.posterUrl} rating={el.rating}/>)}
        </div>
    )
}

export default MoviesList
