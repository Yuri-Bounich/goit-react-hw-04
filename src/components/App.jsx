// import contactsData from '../assets/contacts.json';
import '../index.css';
// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import Work from './Work/Work';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageCard from './ImageCard/ImageCard';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';

const App = () => {
  return (
    <div>
      <ImageModal />
      <LoadMoreBtn />
      <ErrorMessage />
      <Loader />
      <ImageCard />
      <ImageGallery />
      <SearchBar />
      <Work />
    </div>
  );
};

export default App;
