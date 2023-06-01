
import './App.css';
import { useState} from "react";
import Searchbar from './components/Searchbar';
import ImageGalleryItem from './components/ImageGalleryItem';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';

function App() {
  const [Page,setPage] =useState(1);
  const [LoadingImages, setLoadingImages] =useState(false);
  const [SelectedImage, setSelectedImage] = useState("");
  const [PicturesFound, setPicturesFound] = useState("");
  const [ToggleModal, setToggleModal] = useState(false);
/*   const [SearchThis, setSearchThis] = useState("");
    ;
    const [LoadingImages, setLoadingImages] = useState(false);
    const [Page, setPage] = useState(1);
    
     */
    const handleImageClick = (largeImage) => {
      setSelectedImage(largeImage);
      setToggleModal(true);
      console.log("image enviada", SelectedImage);
  };
  const onLoadMore = () => {
    setPage((s) => s + 1);

    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
    });
};
const setModalClose = () => {
  setSelectedImage(null);
  setToggleModal(false);
  /*  this.setState({
selectedImage: null,
isModalShown: false 
}) */
  console.log("setModalClose");
};

  return (
    <div>
      
            <Searchbar setLoadingImages={setLoadingImages} Page={Page} PicturesFound={PicturesFound} setPicturesFound={setPicturesFound}/>
            <ImageGallery >
                {PicturesFound.length === 0 ? (
                    <p>Sin imagenes para mostrar</p>
                ) : (
                    <ImageGalleryItem
                        picturesFound={PicturesFound}
                        LoadingImages={LoadingImages}
                        handleImageClick={handleImageClick}
                        selectedImage={SelectedImage}></ImageGalleryItem>
                )}
            </ImageGallery>

            {PicturesFound.length >= 0
                ? console.log(`se encontraron ${PicturesFound.length} imagenes`)
                : console.log("no se encontraron imagenes")}
            <Button
                LoadMore={onLoadMore}
                pages={Page}
                picturesFound={PicturesFound}
            />
            {ToggleModal === true ? (
                <Modal
                    setModalClose={setModalClose}
                    picturesFound={PicturesFound}
                    selectedImage={SelectedImage}
                    
                />
            ) : null}

            
    </div>
  );
}

export default App;
