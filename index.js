const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
console.log(weekday[d.getDay()]);
const day = weekday[d.getDay()]
console.log(Date.now())
const time = Date.now()

const $Day = document.getElementById('day')
const $Time = document.getElementById('time')
$Day.textContent = `The Day of the week: ${day}`
$Time.textContent = `The current time in UTC: ${time}`;