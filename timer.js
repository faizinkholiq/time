function waktu() {
  var tanggal = new Date();
  setTimeout("waktu()", 1000);

  if (
    document.getElementById("jam") &&
    document.getElementById("menit") &&
    document.getElementById("detik")
  ) {
    document.getElementById("jam").innerText = ("0" + tanggal.getHours()).slice(
      -2
    );
    document.getElementById("menit").innerText = (
      "0" + tanggal.getMinutes()
    ).slice(-2);
    document.getElementById("detik").innerText = (
      "0" + tanggal.getSeconds()
    ).slice(-2);
  }
}
