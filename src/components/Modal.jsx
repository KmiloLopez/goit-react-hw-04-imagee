import React from "react";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const modalWindow = document.querySelector("#modal-window");
const Modal = ({ setModalClose, selectedImage }) => {
    useEffect(() => {
        
        window.addEventListener("keydown",handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });
    const handleKeyDown = (event) => {
        
        if (event.code === "Escape") {
            setModalClose();
        }
    };

    const handleBackdropClick = (event) => {
        if (event.currentTarget === event.target) {
            setModalClose();
        }
    };

    return (
        <>
            {createPortal(
                <div className="Overlay" onClick={handleBackdropClick}>
                    <div className="Modal">
                        <img src={selectedImage} alt="Imagen" />
                    </div>
                </div>,

                modalWindow
            )}
        </>
    );
};

export default Modal;
