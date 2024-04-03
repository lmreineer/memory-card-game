import { useState } from "react";

function ImageCards() {
  // Initially shuffle the images
  const [imageList, setImageList] = useState(shuffleImages);
  const [cardFlipStyles, setCardFlipStyles] = useState(`h-full duration-500
  [transform-style:preserve-3d] [transform:rotateY(180deg)]`);

  // Function for shuffling the images
  function shuffleImages() {
    // Import the images from the assets folder
    const images = require.context("../assets", true);
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

  setTimeout(() => {
    setCardFlipStyles(`h-full duration-500
      [transform-style:preserve-3d]`);
  }, 100);

  return imageList.slice(0, 3).map((src, index) => (
    <div className="group h-72 min-w-56">
      <div className={cardFlipStyles}>
        <img
          className="h-72 min-w-56 cursor-pointer rounded-3xl border-2 border-gray-200 p-8 transition hover:border-black hover:bg-gray-200"
          key={index}
          src={src}
          onClick={handleCardClick}
          alt={`Character ${index}`}
        />
        <div className="absolute inset-0 rounded-3xl bg-black [backface-visibility:hidden] [transform:rotateY(180deg)]"></div>
      </div>
    </div>
  ));
}

export default ImageCards;
