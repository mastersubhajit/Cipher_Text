import React, { useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const CipherText = ({ value }) => {
  const [intervalId, setIntervalId] = useState(null);

  const handleMouseOver = (event) => {
    let iteration = 0;

    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(newIntervalId);
      }

      iteration += 1 / 3;
    }, 20);

    setIntervalId(newIntervalId);
  };

  return (
    <span onMouseOver={handleMouseOver} data-value={value}>
      {value}
    </span>
  );
};

export default CipherText;
