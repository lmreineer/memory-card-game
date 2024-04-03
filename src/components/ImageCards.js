import { useEffect, useState } from "react";
import cardBackImage from "../assets/card-back.png";

function ImageCards() {
  const [imageList, setImageList] = useState(shuffleImages); // Initially shuffle the images
  const [cardFlipEffect, setCardFlipEffect] = useState(
    `[transform-style:preserve-3d] [transform:rotateY(180deg)]`,
  );

  const CARDS_LENGTH = 3;

  // Function for shuffling the images
  function shuffleImages() {
    // Import the images from the pokemons folder in assets
    const images = require.context("../assets/pokemons", true);
    const shuffledList = images.keys().map((image) => images(image));

    // Algorithm for shuffling
    for (let i = shuffledList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }

    return shuffledList;
  }

  function handleCardClick() {
    // Shuffle the images when clicked
    setImageList(shuffleImages);
  }

  function showPokemonName(src) {
    // Get the file name and split it into parts to output the name
    return src.split("/").pop().split(".")[0];
  }

  useEffect(() => {
    setTimeout(() => {
      setCardFlipEffect(`
        [transform-style:preserve-3d]`);
    }, 100);
  }, []); // Put empty brackets to run setTimeouts only onces

  return imageList.slice(0, CARDS_LENGTH).map((src, index) => (
    <div
      className={`cursor-pointer rounded-3xl border-2 bg-gray-100 p-5 text-center duration-500 hover:border-black ${cardFlipEffect}`}
      key={src}
      onClick={handleCardClick}
    >
      <img
        className="pointer-events-none h-72 max-w-64 border-b-2  border-gray-500"
        src={src}
        alt={`Pokémon ${index + 1}`}
      />
      <p className="pt-5">{showPokemonName(src)}</p>
      <img
        className="absolute	inset-0 h-full w-full rounded-3xl [backface-visibility:hidden] [transform:rotateY(180deg)]"
        src={cardBackImage}
        alt="Card back"
      />
    </div>
  ));
}

export default ImageCards;
