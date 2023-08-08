import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  function onChangeColor(){
  const randomColor2 = getRandomColor();
    setColor(randomColor2)
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={onChangeColor}/>
      <Child onChangeColor={onChangeColor}/>
    </div>
  );
}

export default Parent;
