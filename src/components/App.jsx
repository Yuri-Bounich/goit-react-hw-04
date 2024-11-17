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
  // 6) фіксуємо стан для лоадера
  const [isLoading, setIsLoading] = useState(false);
  // 10) створюємо змінну для помилок
  const [isError, setIsError] = useState(false);

  // 2)створюємо юсеф для запиту
  useEffect(() => {
    const getData = async () => {
      try {
        // 7) передпочатком запиту показуємо лоадер
        setIsLoading(true);
        setIsError(false);
        const response = await axios.get(
          'https://api.unsplash.com/search/photos?client_id=1XVhfs4mUzOdwNBmD94EeUhJyEiTHj8y6Dfez-zNpns&query=girl&page=1&per_page=12'
        );

        // //8) ховаємо лоадер
        // setIsLoading(false); це перенесли в finally
        setImages(response.data.results);
      } catch (error) {
        // 11) показуємо помилку через true
        setIsError(true);
        console.log(error);
      } finally {
        // 13) виключаємо лоадер і видаляємо пункт 8
        setIsLoading(false);
      }
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
      {/* 9) умовний рендеринг - якщо isLoading - true то лоадер рендериться, якщо false - то не рендериться */}
      {isLoading && <Loader />}
      <ImageModal />
      <LoadMoreBtn />
      <ImageCard />
      <ImageGallery images={images} /> {/* 3) передаємо отриманий рез в чілдр*/}
      {/* 12) умовний рендеринг - якщо isError - true то помилка рендериться, якщо false - то не рендериться */}
      {isError && <ErrorMessage />}
      {/* <Work /> */}
    </div>
  );
};

export default App;
