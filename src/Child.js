import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor }) {

  return <div className="child" style={{ backgroundColor: "#FFF" }} onClick={onChangeColor} />;
}

export default Child;
