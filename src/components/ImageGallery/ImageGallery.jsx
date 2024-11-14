import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul>
        {/* 4) розмепуємо обєкт */}
        {images.map(post => (
          <li key={post.id}>
            <ImageCard post={post.urls.small} alt={post.alt_description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
