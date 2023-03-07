import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [house, setHouse] = useState("unavailable");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  
  const handleLengthChange = (event) => {
    const myLength = event.target.value;
    setLength(myLength);
  }
  
  const handleWidthChange = (event) => {
    const myWidth = event.target.value;
    setWidth(myWidth);
  }
  
  const calculateHouse = (event) => {
    const areaOfHouse = parseInt(length) * parseInt(width);
    var option = "";
    if (areaOfHouse > 100) {
      option = "a Stadium";
    }
    if (areaOfHouse > 80 && areaOfHouse <= 100) {
      option = "a Hotel";
    }
    if (areaOfHouse > 60 && areaOfHouse <= 80) {
      option = "a Mansion";
    }
    if (areaOfHouse > 40 && areaOfHouse <= 60) {
      option = "an Apartment";
    }
    if (areaOfHouse > 20 && areaOfHouse <= 40) {
      option = "a House";
    }
    if (areaOfHouse <= 20) {
      option = "a Tent";
    }
    setHouse(option);
  }
  
  return (
    <>
    <h1>Enter the land plot length and width here:</h1>
    <form>
      <label>Length:
        <input type="text" name="inputLength" value={length || ""} onChange={handleLengthChange} />
      </label>
      <label>Width:
        <input type="text" name="inputWidth" value={width || ""} onChange={handleWidthChange} />
      </label>
    </form>
    <p></p>
    <button onClick={calculateHouse}>Calculate</button>
    <p>The largest building you can build here is {house}.</p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
