import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn((prev) => !prev);
  };

  const color = isOn ? "red" : "white";

  return (
    <button style={{ backgroundColor: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
