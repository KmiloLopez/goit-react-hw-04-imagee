import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const modalWindow = document.querySelector("#modal-window");
const Modal = ({ setModalClose, selectedImage }) => {
    useEffect(() => {
        window.addEventListener("keydown", (e)=>handleKeyDown(e));
        console.log("useEffectModal ya deberia estar montado el eventlistener")
        return ()=>{console.log("willUNMOUNT");window.removeEventListener("keydown", ()=>handleKeyDown());}
    });
    
    /* this.modalContainer = document.createElement('div');
        this.modalContainer.className = 'modal-container'; */

    /* constructor(props) {
        super(props);
        this.modalContainer = document.createElement('div');
        this.modalContainer.className = 'modal-container';
      } */
      const handleKeyDown = (e) => {
       
        console.log("se preciono una tecla",e)
        if (e.code === "Escape") {
            
            setModalClose();
        }
    };
    

    
    const handleBackdropClick = (event) => {
        if (event.currentTarget !== event.target) {
            setModalClose();
        }
    };

    return (
        <>
            {createPortal(
                
                    <div className="Overlay">
                        <div className="Modal" onClick={handleBackdropClick}>
                            <img src={selectedImage} alt="Imagen" />
                        </div>
                    </div>
                    
                , modalWindow,
                
            )}
        </>
    );
};

export default Modal;
