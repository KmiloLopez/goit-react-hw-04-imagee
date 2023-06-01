import React from 'react';
import Loader from './Loader';

const ImageGalleryItem =({picturesFound, LoadingImages, handleImageClick})=>{
 

  
    /* const {picturesFound, state, handleImageClick} = this.props */
    return (
      <>
        {        
        LoadingImages===false?
        picturesFound.map((pic)=>{
          return(
            
            <li className="ImageGalleryItem" key={pic.id} onClick={()=>handleImageClick(pic.largeImageURL)} >
            <img className="ImageGalleryItem-image" src={pic.webformatURL} alt="none" />
            </li>

            
            
            
          )
        })
         :<Loader/>
          
        
        }

      {/* {console.log("desde imageGalleryItem",picturesFound)} */}
       
      </>
    )
  
}

export default ImageGalleryItem