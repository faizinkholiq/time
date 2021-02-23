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

const today =
  hari[tanggal.getDay()] +
  ", " +
  tanggal.getDate() +
  " " +
  bulan[tanggal.getMonth()] +
  " " +
  tanggal.getFullYear();

document.getElementById("my-body").onload = function() {
  document.getElementById("today").innerHTML = today;
  setInterval(waktu, 1000);
};

function waktu() {
  const now = new Date();

  document.getElementById("jam").innerText = ("0" + now.getHours()).slice(-2);
  document.getElementById("menit").innerText = ("0" + now.getMinutes()).slice(
    -2
  );
  document.getElementById("detik").innerText = ("0" + now.getSeconds()).slice(
    -2
  );

  // Change DOM
  let day = document.getElementById("day").getAttribute("src");

  document.getElementById("my-body").classList = "";
  if (now.getHours() > 18) {
    document.getElementById("my-body").classList.add("dark");
  } else {
    document.getElementById("my-body").classList.add("light");
  }
}
