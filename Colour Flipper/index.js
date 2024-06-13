"use strict";

const body = document.body;

const setColor = (color) => {
  body.style.backgroundColor = color;
};

const randomColor = () => {
  const getRandomValue = () => Math.floor(Math.random() * 256);
  const color = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
  setColor(color);
};
