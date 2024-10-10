import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import { Image } from './App.types';

type Error = string | null;

const API_KEY = 'adcGHzGbl0k6rI7IP6y5hM8dEPTl3rTYEyomDj_0zXI';
const BASE_URL = `https://api.unsplash.com/search/photos?client_id=${API_KEY}`;

export default function App(): JSX.Element {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (query === '') return;

    const fetchImages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${BASE_URL}&query=${query}&page=${page}&per_page=12`);
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      } catch (err) {
        setError('Something went wrong, please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearchSubmit = (newQuery:string):void =>  {
    if (newQuery !== query) {
      setImages([]);
      setPage(1);
    }
    setQuery(newQuery);
  };

  const loadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const closeModal = ():void => {
    setSelectedImage(null);
  };

  const handleImageClick = (image:Image):void => {
    if (selectedImage?.id === image.id) return; 
    setSelectedImage(image);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={loadMore} />}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
}