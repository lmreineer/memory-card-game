// import React, { useState } from "react";
// import ImageCard from "./ImageCard";

// function App() {
//   const [clicked, setClicked] = useState(randomize());

//   function randomize() {
//     const imageFolder = require.context("./assets", true);
//     const images = imageFolder.keys().map((image) => imageFolder(image));

//     // Create a copy of the images array
//     const copy = [...images];

//     // If the array is empty
//     if (copy.length < 1) {
//       // return the last clicked image
//       return clicked;
//     }

//     // const index = Math.floor(Math.random() * copy.length);
//     // const item = copy[index];
//     // copy.splice(index, 1);
//     // return item;

//     let set = new Set();
//     while (set.size < images.length)
//       set.add(Math.floor(Math.random() * copy.length));
//     return Array.from(set);
//   }

//   function handleClick() {
//     setClicked(randomize());
//   }

//   const firstRow = Array.from({ length: 5 }, (_, index) => (
//     <ImageCard key={index} src={randomize()} onClick={handleClick} />
//   ));

//   const secondRow = Array.from({ length: 5 }, (_, index) => (
//     <ImageCard key={index + 5} src={randomize()} onClick={handleClick} />
//   ));

//   return (
//     <div className="flex h-screen flex-col justify-around">
//       <div className="flex select-none justify-around">{firstRow}</div>
//       <div className="flex select-none justify-around">{secondRow}</div>
//     </div>
//   );
// }

// export default App;
