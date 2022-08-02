import React, { useState, useEffect } from "react";
import "./App.css";
import CustomList from "./components/CustomList";
import GameTitle from "./components/GameTitle";

const total = {
  body: 17,
  eyes: 24,
  hair: 73,
  mouths: 24,
  eyebrows: 15,
  hats: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [selected, setSelected] = useState({ body: null, eyes: null });
  console.log(selected);

  const [body, setBody] = useState({ imgLink: "./character/body/1.png" });
  const [eyes, setEyes] = useState({ imgLink: "./character/eyes/1.png" });
  const [mouths, setMouths] = useState({ imgLink: "./character/mouths/1.png" });
  const [hair, setHair] = useState({ imgLink: "./character/hair/1.png" });
  const [clothes1, setClothes1] = useState({
    imgLink: "./character/clothes/layer_1/1.png",
  });
  const [clothes2, setClothes2] = useState({
    imgLink: "./character/clothes/layer_2/1.png",
  });
  const [glasses, setGlasses] = useState({
    imgLink: "./character/accessories/glasses/2.png",
  });
  const [hats, setHats] = useState({
    imgLink: "./character/accessories/hats/1.png",
  });

  const handleClick = (item) => {
    console.log(item);
    const bodyItem = item.id.includes("body");
    const eyesItem = item.id.includes("eyes");
    const hairItem = item.id.includes("hair");
    const mouthsItem = item.id.includes("mouths");
    const clothes1Item = item.id.includes("clothes1");
    const clothes2Item = item.id.includes("clothes2");
    const glassesItem = item.id.includes("glasses");

    switch (item) {
      case bodyItem:
        setBody(item);
        setSelected({ ...selected, body: item });
        break;
      case eyesItem:
        setEyes(item);
        setSelected({ ...selected, eyes: item });
        break;
      case hairItem:
        setHair(item);
        break;
      case mouthsItem:
        setMouths(item);
        break;
      case clothes1Item:
        setClothes1(item);
        break;
      case clothes2Item:
        setClothes2(item);
        break;
      case glassesItem:
        setGlasses(item);
        break;
      default:
        setHats(item);
    }
  };

  const handleRandomClick = () => {
    const indexBody = Math.floor(Math.random() * total.body) + 1;
    const indexEyes = Math.floor(Math.random() * total.eyes) + 1;
    const indexHair = Math.floor(Math.random() * total.hair) + 1;
    const indexMouths = Math.floor(Math.random() * total.mouths) + 1;
    const indexClothes1 = Math.floor(Math.random() * total.clothing1) + 1;
    const indexClothes2 = Math.floor(Math.random() * total.clothing2) + 1;
    const indexGlasses = Math.floor(Math.random() * total.glasses) + 1;
    const indexHats = Math.floor(Math.random() * total.hats) + 1;

    setBody({ imgLink: `./character/body/${indexBody}.png` });
    setEyes({ imgLink: `./character/eyes/${indexEyes}.png` });
    setHair({ imgLink: `./character/hair/${indexHair}.png` });
    setMouths({ imgLink: `./character/mouths/${indexMouths}.png` });
    setClothes1({
      imgLink: `./character/clothes/layer_1/${indexClothes1}.png`,
    });
    setClothes2({
      imgLink: `./character/clothes/layer_2/${indexClothes2}.png`,
    });
    setGlasses({
      imgLink: `./character/accessories/glasses/${indexGlasses}.png`,
    });
    setHats({ imgLink: `./character/accessories/hats/${indexHats}.png` });
  };

  useEffect(() => {
    handleRandomClick();
  }, []);

  return (
    <div className="container">
      <GameTitle />

      <div className="character">
        <div className="left-column">
          <div className="character-avatar">
            <div className="avatar-img">
              <img src={body.imgLink} alt="" className="character-body" />
              <img src={eyes.imgLink} alt="" className="character-eyes" />
              <img src={mouths.imgLink} alt="" className="character-mouths" />
              <img src={hair.imgLink} alt="" className="character-hair" />
              <img src={clothes1.imgLink} alt="" className="character-layer1" />
              <img src={clothes2.imgLink} alt="" className="character-layer2" />
              <img src={glasses.imgLink} alt="" className="character-glasses" />
              <img src={hats.imgLink} alt="" className="character-hats" />

              <img
                src="./character/noses/1.png"
                alt=""
                className="character-noses"
              />
            </div>
            <button onClick={handleRandomClick} className="button">
              RANDOMIZE
            </button>
          </div>
        </div>

        <div className="right-column">
          <div className="character-custom">
            <CustomList
              name="body"
              link="body"
              total={total.body}
              handleClick={handleClick}
              setSelected={setSelected}
              selected={selected}
            />
            <CustomList
              name="eyes"
              link="eyes"
              total={total.eyes}
              handleClick={handleClick}
              setSelected={setSelected}
              selected={selected}
            />
            {/* <CustomList
              name="mouths"
              link="mouths"
              total={total.mouths}
              handleClick={handleClick}
              setSelected={setSelected}
              selected={selected}
            />
            <CustomList
              name="hair"
              link="hair"
              total={total.hair}
              handleClick={handleClick}
              setSelected={setSelected}
              selected={selected}
            />
            <CustomList
              name="clothes1"
              link="clothes/layer_1"
              total={total.clothing1}
              handleClick={handleClick}
              setSelected={setSelected}
              selected={selected}
            />
            <CustomList
              name="clothes2"
              link="clothes/layer_2"
              total={total.clothing2}
              handleClick={handleClick}
              setSelected={setSelected}
              selected={selected}
            />
            <CustomList
              name="glasses"
              link="accessories/glasses"
              total={total.glasses}
              handleClick={handleClick}
              setSelected={setSelected}
              selected={selected}
            />
            <CustomList
              name="hats"
              link="accessories/hats"
              total={total.hats}
              handleClick={handleClick}
              setSelected={setSelected}
              selected={selected}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
