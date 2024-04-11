import { useState, useEffect } from "react";
import axios from "axios";

import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [photosToShow, setPhotosToShow] = useState(null);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const [total_pages, setTotal_pages] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [bigImage, setBigImage] = useState(null);

  const handleQuery = (searchTerm) => {
    setQuery(searchTerm);
    setPhotosToShow([]);
    setPage(1);
  };

  const handleSearchPage = () => {
    setPage((prev) => prev + 1);
  };

  const API_KEY = "_MY8eZRe70XLKFeh_56OiSBd2XHqVO4kTkmso0OQrdM";

  const instance = axios.create({
    baseURL: "https://api.unsplash.com/",
  });

  useEffect(() => {
    const fetchData = async (query, page) => {
      if (!query) return;

      setIsLoading(true);
      try {
        const response = await instance.get(
          `search/photos/?client_id=${API_KEY}&query=${query}&page=${page}&per_page=12`
        );
        setTotal_pages(response.data.total_pages);

        setPhotosToShow((prev) => [...prev, ...response.data.results]);
      } catch (error) {
        setError("true");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(query, page);
  }, [query, page]);

  const openModal = (bigImage) => {
    setIsOpen(true);
    setBigImage(bigImage);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar handleQuery={handleQuery} />
      {Array.isArray(photosToShow) && (
        <ImageGallery gallery={photosToShow} handleModal={openModal} />
      )}

      {page < total_pages && (
        <LoadMoreButton handleLoadMore={handleSearchPage} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          image={bigImage}
        />
      )}
    </>
  );
}

export default App;
