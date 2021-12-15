import React from 'react'
import Filter from './Filter'
import BasicRating from './BasicRating'
import  './Navbar.css'
function Navbar({handleSearch ,handleRating}) {
    return (
        <div className="nav-wrapper">
        <div className="contain">
        <div  className="nav">
            <div className="nav-right">
            <i className="fas fa-film"/>f<span className="film">i</span>lm


            </div>
            <div className="nav-left" >
            <Filter handleSearch={handleSearch}/>
            <BasicRating handleRating={handleRating}/> 
            </div>
            </div>
            </div>


        </div>
    )
}

export default Navbar
