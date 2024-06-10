import React from "react"
import ReactDom from "react-dom"


const MODAL_STYLE ={
    position :'fixed',
    top : '50%',
    left:'50%',
    transform :'translate(-50% , -50%)',
    backgroundImage: 'linear-gradient(35deg, rgb(27, 75, 91) 1%, rgb(224, 229, 231) 50%, rgb(224, 229, 231) 70%, rgb(224, 229, 231) 70%, #FFF 100%)',
    padding:'50px',
    zIndex:1000,
    height:'600px',
    border: '2px solid rgb(16, 59, 77)',
    borderRadius: '25px',
}

const OVERLAY_STYLE={
    position :'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroudColor:'white',
    zIndex :1000,

}

const MODAL_BUTTON ={
    border: 'none',
    letterSpacing: '0.05rem',
    fontWeight: 600,
    fontSize: '14px',
    borderRadius: '500px', 
    padding:'5px',
    width:'90px',
    backgroundColor:'#0a0a23',
    color: 'white',
    }

const Modal=({open, children , onClose, submit})=>{

    if(!open) return null 

    return ReactDom.createPortal(
        <>
        <div style ={OVERLAY_STYLE}>
        <div style ={MODAL_STYLE}>
            {children}
            <div>
            <button onClick={onClose} style={ MODAL_BUTTON }>Close</button>
            <button style={MODAL_BUTTON} onClick={submit}>Submit</button>
            </div>
        </div>
        </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal