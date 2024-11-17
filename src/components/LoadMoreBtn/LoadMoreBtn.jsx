const LoadMoreBtn = ({ handleLoad }) => {
  return (
    <div>
      {/* 26) створюємо кнопку лоад мор*/}
      <button onClick={handleLoad}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
