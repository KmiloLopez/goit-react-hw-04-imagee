import React from "react";


const Searchbar = ({
    setLoadingImages,
    Page,
    setPicturesFound,
    PicturesFound,
    SearchThis,
    setSearchThis,
}) => {
    /* const [SearchThis, setSearchThis] = useState("beautiful blue house"); */

    const onSubmit = (e) => {
        e.preventDefault();

        
        fetchInfo();
    };

    const fetchcall = async () => {
        const searchme = encodeURIComponent(SearchThis);
        setLoadingImages(true);
        console.log("antes del fetch")
        return await fetch(
            `https://pixabay.com/api/?q=cat&page=${Page}&key=34614174-fcdfb58168b28ad843b7da5c7&image_type=photo&orientation=horizontal&per_page=12+"&q=${searchme}`
        ).then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            setLoadingImages(false);

            return response.json();
        });
    };
    const fetchInfo = () => {
        fetchcall()
            .then((pictures) => {
                console.log("pictures c", pictures);

                if (Page > 1) {
                    const morePictures = [
                        ...PicturesFound,
                        ...pictures.hits,
                    ];
                    setPicturesFound(morePictures);
                } else {
                    setPicturesFound(pictures.hits);
                }
            })
            .catch((error) => {
                console.log("error", error);
            });
    };
    const handleInput = (e) => {
        e.preventDefault();
        const { value } = e.target;
        setSearchThis(value);
        console.log("value", value);
        console.log("SearchThis", SearchThis);
    };
    return (
        <header className="Searchbar">
            <form className="SearchForm" onSubmit={onSubmit}>
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    /* name="searchinput" */
                    value={SearchThis}
                    onChange={handleInput}
                    /* onKeyUp={handleInput} */
                />
            </form>
        </header>
    );
};

export default Searchbar;
