function waktu() {
  var tanggal = new Date();
  setTimeout("waktu()", 1000);
  document.getElementById("jam").innerHTML = ("0" + tanggal.getHours()).slice(
    -2
  );
  document.getElementById("menit").innerHTML = (
    "0" + tanggal.getMinutes()
  ).slice(-2);
  document.getElementById("detik").innerHTML = (
    "0" + tanggal.getSeconds()
  ).slice(-2);

  let body = document.getElementById("my-body");
  let periode = null;

  // if(tanggal.getSeconds() <= 15){
  //     periode = "pagi";
  // }else if(tanggal.getSeconds() <= 30){
  //     periode = "siang";
  // }else if(tanggal.getSeconds() <= 45){
  //     periode = "sore";
  // }else if(tanggal.getSeconds() <= 60){
  //     periode = "malam";
  // }

  // body.setAttribute("class", periode);
}
