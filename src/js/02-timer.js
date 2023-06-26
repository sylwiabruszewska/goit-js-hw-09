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
  },
};

flatpickr(inputElement, options);
