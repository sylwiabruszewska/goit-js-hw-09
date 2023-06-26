const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const bodyElement = document.body;
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBackgroundColor() {
  bodyElement.style.backgroundColor = getRandomHexColor();
}

const onStartBtnClick = () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  changeBackgroundColor();
  timerId = setInterval(changeBackgroundColor, 1000);
};

const onStopBtnClick = () => {
  stopButton.disabled = true;
  startButton.disabled = false;
  clearInterval(timerId);
  timerId = null;
};

stopButton.disabled = true;

startButton.addEventListener('click', onStartBtnClick);
stopButton.addEventListener('click', onStopBtnClick);
