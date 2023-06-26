import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputElement = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const spanDays = document.querySelector('[data-days]');
const spanHours = document.querySelector('[data-hours]');
const spanMinutes = document.querySelector('[data-minutes]');
const spanSeconds = document.querySelector('[data-seconds]');

let selectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentTime = new Date().getTime();
    selectedDate = selectedDates[0].getTime();

    if (selectedDate < currentTime) {
      window.alert('Please choose a date in the future');
    } else {
      startButton.disabled = false;
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

startButton.disabled = true;

flatpickr(inputElement, options);
