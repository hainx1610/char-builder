import React, { useState, useEffect } from "react";

function Avatar() {
  return <div>ava</div>;
}

function Square() {
  // const testImgLink =
  //   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png";
  return <img src={require("./character/body/1.png")} alt="" width={"40px"} />;
}
function ItemsList() {
  return (
    <div className="flex">
      <Square />
      <Square />
      <Square />
    </div>
  );
}

function PartListSection() {
  return (
    <div>
      <h2>Name of list</h2>
      <ItemsList />
    </div>
  );
}
function PartListsArea() {
  return (
    <div>
      <PartListSection />
      <PartListSection />
      <PartListSection />
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
