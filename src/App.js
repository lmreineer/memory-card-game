import { useEffect, useState } from "react";
import candyPhoto from "./assets/candy.png";
import dipperPinesPhoto from "./assets/dipper_pines.png";
import fordPinesPhoto from "./assets/ford_pines.png";
import gideonGleefulPhoto from "./assets/gideon_gleeful.png";
import grendaPhoto from "./assets/grenda.png";
import mabelPinesPhoto from "./assets/mabel_pines.png";
import robbieValentinoPhoto from "./assets/robbie_valentino.png";
import soosRamirezPhoto from "./assets/soos_ramirez.png";
import stanPinesPhoto from "./assets/stan_pines.png";
import wendyCorduroyPhoto from "./assets/wendy_corduroy.png";
import ImageCard from "./ImageCard";

function App() {
  const firstRowImageArray = [
    candyPhoto,
    dipperPinesPhoto,
    fordPinesPhoto,
    gideonGleefulPhoto,
    grendaPhoto,
    mabelPinesPhoto,
    robbieValentinoPhoto,
    soosRamirezPhoto,
    stanPinesPhoto,
    wendyCorduroyPhoto,
  ];
  // const secondRowImageArray = [
  //   mabelPinesPhoto,
  //   robbieValentinoPhoto,
  //   soosRamirezPhoto,
  //   stanPinesPhoto,
  //   wendyCorduroyPhoto,
  // ];

  function shuffleElements(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  const shuffleFirstImageArray = shuffleElements(firstRowImageArray);
  // const shuffleSecondImageArray = shuffleElements(secondRowImageArray);

  const [clicked, setClicked] = useState(shuffleFirstImageArray);

  function handleFirstRowClick() {
    setClicked(shuffleFirstImageArray);
  }

  // function handleSecondRowClick() {
  //   shuffleElements(secondRowImageArray);
  // }

  const firstRow = Array.from(clicked, (asd, index) => (
    <ImageCard
      index={index + 1}
      key={index}
      src={asd}
      onClick={handleFirstRowClick}
    />
  ));

  // const secondRow = Array.from(shuffleSecondImageArray, (asd, index) => (
  //   <ImageCard
  //     index={index + 6}
  //     key={index + 5}
  //     src={asd}
  //     onClick={handleSecondRowClick}
  //   />
  // ));

  return (
    <div className="flex h-screen flex-col justify-around">
      <div className="flex select-none justify-around">{firstRow}</div>
      {/* <div className="flex select-none justify-around">{secondRow}</div> */}
    </div>
  );
}

export default App;
