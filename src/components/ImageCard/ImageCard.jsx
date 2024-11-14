const ImageCard = ({ post, alt }) => {
  return (
    <div>
      <img src={post} alt={alt} />
    </div>
  );
};

export default ImageCard;
