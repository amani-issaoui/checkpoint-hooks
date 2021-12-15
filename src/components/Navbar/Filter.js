import React from 'react'
import { useState } from "react";
import "./Filter.css";

function Filter({handleSearch}) {
    const [inp, setInp] = useState("");
   
    const handleChange=(e)=>{
        setInp(e.target.value)
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        handleSearch(inp);
        setInp("")
     
    }
    return (
        <div>
            <div>
            <form  onSubmit={handleSubmit}>
                <input  className="filter" type="text" onChange={handleChange} value={inp} placeholder='Search...' /> </form > </div>
        </div>
    )
}

export default Filter
