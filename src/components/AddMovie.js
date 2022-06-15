import {useState} from 'react';
import {Modal, Button , Form , InputGroup } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { MdOutlineAddCircle } from "react-icons/md";
import { v4 as uuid } from 'uuid';


    const AddMovie = ({addMovie}) => {

    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie,setNewMovie] = useState({
      index :"",
      Title :"",
      description :"",
      rating : 1,
      Poster : ""
    });

    const handleChange =(e) => {
      newMovie.index=uuid()
      setNewMovie({...newMovie,[e.target.id] : e.target.value})
       }

    const ratingChanged = (newRating) => {
      setNewMovie({...newMovie,rating : newRating})
  
    };
    return (
      
      <>
        
        <MdOutlineAddCircle style={{width:60,height:60}} onClick={handleShow}/>  
       
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{color:"black"}}>Add a Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body >
                <InputGroup className="mb-3">
                <InputGroup.Text>
                Film Title
                </InputGroup.Text>
                <Form.Control
                id="Title" 
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleChange}
                />
                </InputGroup>

                <InputGroup className="mb-3">
                <InputGroup.Text>
                Film Description
                </InputGroup.Text>
                <Form.Control
                id="description"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleChange}
                />
                </InputGroup>

                <InputGroup className="mb-3">
                <InputGroup.Text >
                Film Url-Poster'
                </InputGroup.Text>
                <Form.Control
                id="Poster"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleChange}
                />
                </InputGroup>

                <InputGroup className="mb-3">
                
                <ReactStars
                    count={5}
                    size={20}
                    value={1}
                    activeColor="#ffd700"
                    onChange={ratingChanged}
                />
          
                </InputGroup>

           
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" 
              onClick={()=>{
              {newMovie.Title===""?handleClose():
              addMovie(newMovie);
              setNewMovie({...newMovie,Title : ""});
              handleClose();
              }

              }}
              >
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  export default AddMovie;