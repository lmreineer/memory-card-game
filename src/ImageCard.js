function ImageCard({ index, src, onClick }) {
  return (
    <img
      className="h-72 min-w-56 cursor-pointer rounded-3xl border-2 border-gray-200 p-8 transition hover:border-black hover:bg-gray-200"
      src={src}
      onClick={onClick}
      alt={`Character ${index}`}
    />
  );
}

export default ImageCard;
