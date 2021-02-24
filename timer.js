const tanggal = new Date();

const hari = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const bulan = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Desember"
];

const hari_ini =
  hari[tanggal.getDay()] +
  ", " +
  tanggal.getDate() +
  " " +
  bulan[tanggal.getMonth()] +
  " " +
  tanggal.getFullYear();

const body = document.getElementById("my-body");
const greet = document.getElementById("greet");
const today = document.getElementById("today");
const jam = document.getElementById("jam");
const menit = document.getElementById("menit");
const detik = document.getElementById("detik");
const dayimg = document.getElementById("day");

body.onload = function() {
  today.innerHTML = hari_ini;
  setDay(tanggal.getHours);
  setInterval(waktu, 1000);
};

function waktu() {
  const now = new Date();

  jam.innerText = ("0" + now.getHours()).slice(-2);
  menit.innerText = ("0" + now.getMinutes()).slice(-2);
  detik.innerText = ("0" + now.getSeconds()).slice(-2);

  setDay(now.getHours);
}

function setDay(hours) {
  // Change DOM
  let day = dayimg.getAttribute("src").split("/");
  let msg;

  body.classList = "";
  if (hours > 18) {
    msg = "Good Night";
    day[1] = "moon-plain.svg";
    body.classList.add("dark");
  } else {
    msg = "Good Morning";
    day[1] = "sun-plain.svg";
    body.classList.add("light");
  }

  dayimg.setAttribute("src", day.join("/"));
  greet.innerText = msg;
}
