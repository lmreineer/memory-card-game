import React, { useState } from "react";
import ImageCard from "./ImageCard";

export default function App() {
  // Initially shuffle the images
  const [imageList, setImageList] = useState(shuffleImages);

  // Function for shuffling the images
  function shuffleImages() {
    const images = require.context("./assets", true);
    const shuffledList = images.keys().map((image) => images(image));

    // Algorithm for shuffling
    for (let i = shuffledList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
    }

    return shuffledList;
  }

  function handleImageClick() {
    // Shuffle the images when clicked
    setImageList(shuffleImages);
  }

  const imageCards = imageList
    .slice(0, 3)
    .map((src, index) => (
      <ImageCard
        key={index}
        index={index + 1}
        src={src}
        onClick={handleImageClick}
      />
    ));

  return (
    <div className="flex h-screen flex-col justify-around">
      <div className="flex select-none justify-around">{imageCards}</div>
    </div>
  );
}
