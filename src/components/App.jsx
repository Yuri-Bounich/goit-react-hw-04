// import contactsData from '../assets/contacts.json';
import '../index.css';
import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import Work from './Work/Work';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageCard from './ImageCard/ImageCard';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';
import axios from 'axios';

const App = () => {
  // 1)створюємо стейт для зберігання картинок
  const [images, setImages] = useState([]);
  // 2)створюємо юсеф для запиту
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        'https://api.unsplash.com/search/photos?client_id=1XVhfs4mUzOdwNBmD94EeUhJyEiTHj8y6Dfez-zNpns&query=girl&page=1&per_page=12'
      );
      setImages(response.data.results);
    };
    //переробл варіант що нижче асинхронно
    getData();
  }, []);

  // !!!альтернативний варіант записати пункт 2
  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://api.unsplash.com/search/photos?client_id=1XVhfs4mUzOdwNBmD94EeUhJyEiTHj8y6Dfez-zNpns&query=girl&page=1&per_page=12'
  //     )
  //     .then(res => setImages(res.data.results));
  //   //then тут зберігає результати (results вданому випадку. його назву беремо з відвовіді бекенду, мережа в консолі або тандер клієнт в вскод)
  // }, []);

  return (
    <div>
      <SearchBar />
      <ImageModal />
      <LoadMoreBtn />
      <ErrorMessage />
      <Loader />
      <ImageCard />
      <ImageGallery images={images} /> {/* 3) передаємо отриманий рез в чілдр*/}
      {/* <Work /> */}
    </div>
  );
};

export default App;
