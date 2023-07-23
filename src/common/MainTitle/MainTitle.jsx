import React, { memo } from "react";
import "./style.scss";
function MainTitle({ text, coloredText }) {
  console.log(text, coloredText);
  return (
    <h3 className="mb-5">
      {text} <span>{coloredText}</span>
    </h3>
  );
}

export default memo(MainTitle);
