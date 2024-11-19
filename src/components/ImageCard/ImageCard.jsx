import s from './ImageCard.module.css';
const ImageCard = ({ post, alt }) => {
  return <img className={s.image} src={post} alt={alt} />;
};

export default ImageCard;
