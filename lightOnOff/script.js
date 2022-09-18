const buttons = document.getElementById('buttons');
const images = document.getElementById('images');

const btnOn = document.getElementById('btnOn');
const btnOff = document.getElementById('btnOff');
const onlight = document.getElementById('onlight');
const offlight = document.getElementById('offlight');


prepareBase();

function prepareBase() {
  buttons.removeChild(btnOff);
  images.removeChild(onlight);
  document.body.style.backgroundColor = "black";
  buttons.style.position = "relative";
  buttons.style.left = "35%";
  buttons.style.right = "65%";
  images.style.position = "relative";
  images.style.left = "35%";
  images.style.right = "65%";
}

btnOn.onclick = function() {
  makeLightOn();
};

btnOff.onclick = function() {
  makeLightOff();
}

function makeLightOn() {
  document.body.style.backgroundColor = "white";
  buttons.removeChild(btnOn);
  images.removeChild(offlight);
  buttons.appendChild(btnOff);
  images.appendChild(onlight);
}

function makeLightOff() {
  document.body.style.backgroundColor = "black";
  buttons.removeChild(btnOff);
  images.removeChild(onlight);
  buttons.appendChild(btnOn);
  images.appendChild(offlight);
}
