
import './App.css';

import { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'

import { Switch, Route } from "react-router-dom";


function App() {
  const movies=[{title:"Parasite",description:"The whole family of Ki-taek is unemployed, and takes a strong interest in the lifestyle of the wealthy Park family. One day, their son managed to get recommended to give private English lessons with the Parks. It is the beginning of an uncontrollable spiral ...",posterUrl:"./images/parasite.jpg",rating:5,trailerUrl:"https://www.youtube.com/watch?v=5xH0HfJHsaY"},
  {title:"Holidate",description:"At parties, two hardened bachelors often find themselves at the children's table or alongside useless boyfriends. Following a chance meeting, they promise to accompany each other over the festive calendar for the months to come. After a year of celebrating, they realize that sharing what they hate can give rise to other feelings.",posterUrl:"./images/holidate.jpg",rating:3,trailerUrl:"https://www.youtube.com/watch?v=hxaaAoI57fk"},
  {title:"Miracle",description:"Memo, a mentally handicapped shepherd, lives with his daughter and grandmother in a village on the Turkish Aegean coast. One day his life is turned upside down when the child of the local commander is murdered and Memo is accused of the murder and sentenced to death. Separated from his daughter, the father of the family will have to prove his innocence.",posterUrl:"./images/miracle.jpg",rating:4,trailerUrl:"https://www.youtube.com/watch?v=G2wPoBy2JQI"},
  {title:"Last-Christmas",description:"Kate roams the streets of London accompanied by the sound of bells on her shoes, another irritating consequence of being an elf in a year-round Christmas store. Tom looks too good to be true when he walks into his life.",posterUrl:"./images/last-christmas.jpg",rating:3,trailerUrl:"https://www.youtube.com/watch?v=z9CEIcmWmtA"},
  {title:"Sweet",description:"Sweet & Sour is a 2021 South Korean romantic comedy film, based on the novel Initiation Love by Kurumi Inui. The film, directed by Lee Gye-byeok and starring Jang Ki-yong, Chae Soo-bin and Krystal Jung, is a love affair with a love affair who split up due to a mission.",posterUrl:"./images/sweet.jpg",rating:4,trailerUrl:"https://www.youtube.com/watch?v=hZORUEZd_pg" },
  {title:"Me before you",description:"A young and wealthy banker, Will Traynor was a boy full of daring and optimism until he found himself paralyzed following an accident two years earlier. Become cynical, he has given up everything and is only a shadow of himself.",posterUrl:"./images/me.jpg",rating:3,trailerUrl:"https://www.youtube.com/watch?v=Eh993__rOxA"}
  ]
  const[moviesFinal,setMoviesFinal]=useState(movies);
const [search, setSearch] = useState("");
const  [rate, setRate] = useState(0);
const handleRating=(rat)=>{
  setRate(rat)
}

  const handleAdd=(newMovie)=>{
    setMoviesFinal([...moviesFinal,newMovie])
  }
  const handleSearch=(inp)=>{
    setSearch(inp)

  }
  const filtrage=(arr)=>{
  return arr.filter((el)=>
    {
      if ((search!="")&&(rate==0)) {
        return el.title.toLowerCase().includes(search.toLowerCase().trim())

      }
      else if ((rate!=0) &&(search=="")) {
        return(el.rating===rate) ;
    }
       else  if((search=="") &&(rate==0))
      {
        return el;
      }
    
     
     /* if(search==""){
        return el
      }
     
     /* else {
        return el.title.toLowerCase().includes(search.toLowerCase())}

     
      if(rate==0){
        return el
      }
      else{
        return(el.rating===rate) ;
      }
       
     */
    })
  }
  return (
    <div className="App">
      
      
        <Navbar handleSearch={handleSearch}  handleRating={handleRating}/>
        <Switch>
 <Route  exact path="/" render={(props)=> <Home  movies={filtrage(moviesFinal)} handleAdd={handleAdd} {...props}/>}/>
<Route path="/moviedetail/:title" render={(props)=> <MovieDetail movie={movies}{...props}/>}/>
</Switch>

      
    </div>
  );
}

export default App;
