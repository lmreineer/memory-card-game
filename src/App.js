import React, { useState } from "react";
import ImageCard from "./ImageCard";

export default function App() {
  const [imageList, setImageList] = useState(() => {
    // Import images from the assets folder
    const images = require.context("./assets", true);
    return images.keys().map((image) => images(image));
  });

  // Function for shuffling the images
  function shuffleImages() {
    setImageList((prevImageList) => {
      const shuffledList = [...prevImageList];
      for (let i = shuffledList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledList[i], shuffledList[j]] = [shuffledList[j], shuffledList[i]];
      }
      return shuffledList;
    });
  }

  const imageCards = imageList.map((src, index) => (
    <ImageCard
      key={index}
      index={index + 1}
      src={src}
      onClick={shuffleImages}
    />
  ));

  return (
    <div className="flex h-screen flex-col justify-around">
      <div className="flex select-none justify-around">{imageCards}</div>
    </div>
  );
}
