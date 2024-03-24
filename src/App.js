import dipperPinesImage from "./assets/dipper_pines.png";
import mabelPinesImage from "./assets/mabel_pines.png";
import stanPinesImage from "./assets/stan_pines.png";
import fordPinesImage from "./assets/ford_pines.png";
import candyImage from "./assets/candy.png";
import gideonGleefulImage from "./assets/gideon_gleeful.png";
import grendaImage from "./assets/grenda.png";
import robbieValentinoImage from "./assets/robbie_valentino.png";
import wendyCorduroyImage from "./assets/wendy_corduroy.png";

function App() {
  return (
    <div className="flex h-full items-center">
      <div className="h-96 w-96">
        <img className="border-2 border-black" src={dipperPinesImage} />
        <img className="border-2 border-black" src={mabelPinesImage} />
        <img className="border-2 border-black" src={stanPinesImage} />
        <img className="border-2 border-black" src={fordPinesImage} />
        <img className="border-2 border-black" src={candyImage} />
        <img className="border-2 border-black" src={gideonGleefulImage} />
        <img className="border-2 border-black" src={grendaImage} />
        <img className="border-2 border-black" src={robbieValentinoImage} />
        <img className="border-2 border-black" src={wendyCorduroyImage} />
      </div>
    </div>
  );
}

export default App;
