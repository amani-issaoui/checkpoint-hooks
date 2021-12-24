import React from 'react'
import "./style.css"
import Rating from '@mui/material/Rating'
import {Link } from "react-router-dom"

function Movie({title,description,posterUrl,rating}) {
    return (
        <div className="movie">
<Link style={{textDecoration:"none"}}     to={`/moviedetail/${title}`}>
<img src={posterUrl} alt="holidate" />
            <div className="title-rate">
            <h1>{title}</h1>
            <Rating name="read-only" value={rating} readOnly />
           
            </div>
            
            <div  className="description">
          <h3>Description</h3> 
            <p>{description}</p>
            </div>
            </Link>
        </div>
    )
}

export default Movie
