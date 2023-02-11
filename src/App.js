import React, { useState } from "react";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouths: 24,
  eyebrows: 15,

  earrings: 32,
  glasses: 17,
  hats: 28,
  neckwear: 18,
  facial_hair: 17,
  layer_1: 5,
  layer_2: 5,
  layer_3: 9,
  noses: 1,
};

function Avatar({ avatarObj }) {
  return (
    <div className="relative h-[280px] w-[260px]">
      {Object.entries(avatarObj).map((item, index) => {
        const [listName, number] = item;
        let subfolder = listName;
        let subIndex = number;
        if (
          listName === "earrings" ||
          listName === "glasses" ||
          listName === "hats" ||
          listName === "neckwear"
        ) {
          subfolder = `accessories/${listName}`;
        }

        if (
          listName === "layer_1" ||
          listName === "layer_2" ||
          listName === "layer_3"
        ) {
          subfolder = `clothes/${listName}`;
        }
        return (
          <img
            src={require(`./character/${subfolder}/${subIndex}.png`)}
            alt=""
            width={260}
            className={`absolute top-0 left-0 z-[${index}]`}
            key={index}
          />
        );
      })}
    </div>
  );
}

function RandomizeBtn({ randomize }) {
  return (
    <button
      className=" bg-blue-600 text-white hover:cursor-pointer hover:brightness-90"
      onClick={randomize}
    >
      Randomize
    </button>
  );
}

function AvatarWrapper({ avatarObj, randomize }) {
  return (
    <div className="fixed top-32 flex w-[100%] flex-col items-center bg-white py-3">
      <Avatar avatarObj={avatarObj} />
      <RandomizeBtn randomize={randomize} />
    </div>
  );
}

function Square({ subfolder, subIndex, handleClick }) {
  return (
    <img
      src={require(`./character/${subfolder}/${subIndex}.png`)}
      alt=""
      width={"40px"}
      className=" rounded-sm border bg-blue-200 hover:cursor-pointer hover:brightness-90"
      onClick={() => handleClick(subfolder, subIndex)}
    />
  );
}

function ItemsList({ listName, number, handleClick }) {
  let tempArr = [];
  for (let i = 1; i <= number; i++) {
    let subfolder = listName;
    if (
      listName === "earrings" ||
      listName === "glasses" ||
      listName === "hats" ||
      listName === "neckwear"
    ) {
      subfolder = `accessories/${listName}`;
    }

    if (
      listName === "layer_1" ||
      listName === "layer_2" ||
      listName === "layer_3"
    ) {
      subfolder = `clothes/${listName}`;
    }

    tempArr.push(
      <Square
        subfolder={subfolder}
        subIndex={i}
        key={i}
        handleClick={handleClick}
      />
    );
  }
  return <div className="flex flex-wrap justify-center">{tempArr}</div>;
}

function PartListSection({ listName, number, handleClick }) {
  return (
    <div className="my-8 flex flex-col items-center">
      <h2>{listName}</h2>
      <ItemsList
        listName={listName}
        number={number}
        handleClick={handleClick}
      />
    </div>
  );
}

function PartListsArea({ handleClick }) {
  return (
    <div className=" mt-[450px]">
      {Object.entries(total).map((item, index) => {
        const [listName, number] = item;

        return (
          <PartListSection
            listName={listName}
            number={number}
            key={index}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
}

function MainArea() {
  const [avatarObj, setAvatarObj] = useState({
    body: 1,
    eyes: 1,
    hair: 1,
    mouths: 1,
    eyebrows: 1,

    earrings: 1,
    glasses: 1,
    hats: 1,
    neckwear: 1,
    facial_hair: 1,
    layer_1: 1,
    layer_2: 1,
    layer_3: 1,
    noses: 1,
  });

  const handleClick = (subfolder, subIndex) => {
    setAvatarObj({ ...avatarObj, [subfolder]: [subIndex] });
  };

  const randomize = () => {
    const tempObj = { ...total };
    Object.keys(tempObj).forEach((key) => {
      tempObj[key] = Math.floor(Math.random() * tempObj[key]) + 1;
    });
    setAvatarObj(tempObj);
  };

  return (
    <div className="flex flex-col items-center">
      <AvatarWrapper avatarObj={avatarObj} randomize={randomize} />
      <PartListsArea handleClick={handleClick} />
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="fixed mx-auto w-[100%] bg-white p-6 text-center text-4xl text-blue-600">
        CHARACTER <br></br>customization
      </div>

      <MainArea />
    </div>
  );
}

export default App;
