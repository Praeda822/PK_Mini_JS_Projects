"use strict";

const body = document.getElementsByTagName("body")[0];

function setColor(element) {
  body.style.backgroundColor = element;
}

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);

  const color = `rgb(${red}, ${blue}, ${green})`;
  body.style.backgroundColor = color;
}
