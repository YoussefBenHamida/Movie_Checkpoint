import Modal from "./Modal"
import { useState } from "react"

/* Start css*/
const TITLE={
    fontWeight:600,
    paddingBottom:'25px',
    fontFamily:'Roboto'

}

const BUTTON_WRAPPER_STYLE={
    postion : 'relative',
    zIndex : 1,
    display:'flex',
    justifyContent :'center'
}

const BUTTON_ADD ={
    border: 'none',
    letterSpacing: '0.05rem',
    fontWeight: 600,
    fontSize: '14px',
    borderRadius: '500px', 
    padding:'5px',
    width:'225px',
    backgroundColor:'rgb(255, 0, 0)',
    color: 'white',
    marginBottom:'100px'
}

const SUB_TITLE={
    fontWeight:600
}

const INPUTS={
    marginBottom:'10%'
}

/* END css*/

const AddMovie = ({addHandler})=>{

const [isOpen ,setIsOpen]=useState(false)

const [name,setName]=useState("")
const[description, setDescription]=useState("")
const [rating, setRating]=useState("")
const [imageUrl, setImage]=useState("")

const AddNewMovie =()=>{
    const newMovie ={
        id : Math.random(),
        name,
        description,
        rating,
        imageUrl,
    }
    addHandler(newMovie)
    setIsOpen(false)

}

    return (
        <>

        <div style ={BUTTON_WRAPPER_STYLE}>
        <button style={BUTTON_ADD} onClick={()=>setIsOpen(true)}>Add Film</button>
        </div>

        <Modal open={isOpen} onClose={()=>setIsOpen(false)} submit={AddNewMovie}>
         <h1 style={TITLE}>Movie Attribut</h1>
        
        <p style={SUB_TITLE} >Movie Name</p>   
        <input style={INPUTS}
        type="text"
        name="name"
        onChange={(e)=>setName(e.target.value)}
        />

        <p style={SUB_TITLE}>Movie Picture</p>   
        <input style={INPUTS} 
        type="text"
        name="image" 
        onChange={(e)=>setImage(e.target.value)}/>

        <p style={SUB_TITLE}>Movie Summary</p>   
        <input style={INPUTS} 
        type="text"
        name="name"
        onChange={(e)=>setDescription(e.target.value)}/>

        <p style={SUB_TITLE}>Movie Rating</p>   
        <input style={INPUTS} 
        type="text"
        name="rating"
        onChange={(e)=>setRating(e.target.value)}/>   

        </Modal>
        </>
    )
}

export default AddMovie