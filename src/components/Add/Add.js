import React from "react";
import { useState } from "react";
import  "./Add.css";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Add({handleAdd}) {
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setNewmovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: 0,
  });

  
  
  const handleChange = (e) => {
   setNewmovie({...newmovie,[e.target.name]:e.target.value}); 
  
  };
const handleSave=(e)=>{
    e.preventDefault();
    if((newmovie.title!="")&&(newmovie.description!="")&&(newmovie.posterUrl.startWith("http")) )
{
    handleAdd(newmovie);
    
    setNewmovie({
        title: "",
        description: "",
        posterUrl: "",
        rating: 0,
      })}
      else {alert ("you must input the form")}
}
  return (
    <div>
      <div className="addbox">
        <h1>You can add your favourite movie</h1>
      <Button variant="primary" style={{backgroundColor:" #c0392b", border:"none"}}   onClick={handleShow}>
        ADD FILM
      </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Body>
            <Modal.Title>Title </Modal.Title>
            <input name="title" value={newmovie.title} req="required" type="text" onChange={handleChange}  />
            <Modal.Title>Description</Modal.Title>
            <input name="description" type="text" req="required" value={newmovie.description} onChange={handleChange} />
            <Modal.Title>Rating</Modal.Title>
            <input name="rating" type="number" req="required" min="0" max="5" onChange={handleChange}  value={newmovie.rating}/>
            <Modal.Title>PosterUrl</Modal.Title>
            <input name="posterUrl" type="url" req="required" onChange={handleChange} value={newmovie.posterUrl}/>
          </Modal.Body>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  style={{backgroundColor:" #c0392b", border:"none"}} onClick={handleClose,handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Add;
