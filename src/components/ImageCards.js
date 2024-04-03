import { useEffect, useState } from "react";

function ImageCards() {
  // Initially shuffle the images
  const [imageList, setImageList] = useState(shuffleImages);

  const [cardFlipStyles, setCardFlipStyles] = useState(
    `[transform-style:preserve-3d] [transform:rotateY(180deg)]`,
  );
  const [cardIsShown, setCardIsShown] = useState(false);

  // Function for shuffling the images
  function shuffleImages() {
    // Import the images from the assets folder
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
      setCardFlipStyles(`
        [transform-style:preserve-3d]  duration-500`);
    }, 100);

    setTimeout(() => {
      setCardFlipStyles(`
        duration-0 border-gray-500`);
    }, 300);

    setTimeout(() => {
      setCardIsShown(true);
    }, 300);
    // Put empty brackets to run setTimeouts only once
  }, []);

  const sss = require.context("../assets", true);
  const list = sss.keys().map((image) => sss(image));

  return imageList.slice(0, 3).map((src, index) => (
    <div
      className={`cursor-pointer rounded-3xl border-2 bg-gray-100 p-5 text-center hover:border-black ${cardFlipStyles}`}
      onClick={handleCardClick}
    >
      <img
        className="pointer-events-none h-72 max-w-72 border-b-2 border-gray-500"
        key={index}
        src={src}
        alt={`Character ${index}`}
      />
      <p className="pt-5">{cardIsShown ? showPokemonName(src) : ""}&nbsp;</p>
      <img
        src={list[0]}
        className="absolute inset-0 h-full w-full rounded-3xl p-5 [backface-visibility:hidden] [transform:rotateY(180deg)]"
      />
    </div>
  ));
}

export default ImageCards;
