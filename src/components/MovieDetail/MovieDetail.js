import React from 'react'
import  {Link } from "react-router-dom"
import './moviedetail.css'

function MovieDetail({match,movie}) {
    const exist =movie.find((el)=>el.title==match.params.title) 
  const {posterUrl,trailerUrl}=exist
    return (
        <div className='moviedetail' >
           <img src={posterUrl} alt="holidate" />
            <h1>{exist.title}</h1>
            <p> {exist.description}</p>
            
            <iframe width="560" height="315" src={trailerUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
          <Link to="/"> <button>go back</button></Link>  
        </div>
    )
}


export default MovieDetail;
