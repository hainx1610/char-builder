import React, { useState, useEffect } from "react";

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
};

function Avatar() {
  return <div>ava</div>;
}

function Square({ subfolder, subIndex }) {
  return (
    <img
      src={require(`./character/${subfolder}/${subIndex}.png`)}
      alt=""
      width={"40px"}
      className=" rounded-sm border bg-slate-100 hover:cursor-pointer hover:bg-slate-50"
    />
  );
}

function ItemsList({ listName, number }) {
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

    tempArr.push(<Square subfolder={subfolder} subIndex={i} key={i} />);
  }
  return <div className="flex flex-wrap justify-center">{tempArr}</div>;
}

function PartListSection({ listName, number }) {
  return (
    <div className="my-8 flex flex-col items-center">
      <h2>{listName}</h2>
      <ItemsList listName={listName} number={number} />
    </div>
  );
}

function PartListsArea() {
  return (
    <div>
      {Object.entries(total).map((item, index) => {
        const [listName, number] = item;

        return (
          <PartListSection listName={listName} number={number} key={index} />
        );
      })}
    </div>
  );
}

function MainArea() {
  return (
    <div>
      <Avatar />
      <PartListsArea />
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="title text-3xl text-blue-600">CHARACTER</div>
      <div className="title text-3xl text-blue-600">customization</div>
      <MainArea />
    </div>
  );
}

export default App;
