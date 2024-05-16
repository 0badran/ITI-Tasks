// SVG Part
var text = document.getElementById("text");
function changeColor(element) {
  let Attrs = [
    ["Right Eyes", "50", "50"],
    ["Left Eyes", "110", "50"],
    ["Nose", "110", "105"],
    ["Mouth", "130", "135"],
  ];
  let id = Number(element.id);
  text.innerHTML = Attrs[id][0];
  text.setAttribute("x", Attrs[id][1]);
  text.setAttribute("y", Attrs[id][2]);
  element.setAttribute("fill", "#FFF");
}

function restoreColor(element) {
  text.innerHTML = String();
  element.removeAttribute("fill");
}

// Canvas Part

function sadFase()
{
  function fase() {
    ctx.beginPath();
    ctx.arc(60, 60, 55, 0, 2 * Math.PI);
    ctx.strokeStyle ="#0f0";
    ctx.lineWidth = 3
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.stroke();
  }
  function mouth() {
    ctx.beginPath();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 3;
    ctx.arc(60, 90, 13, 3, 2 * Math.PI);
    ctx.stroke();
  }
  function eyes(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = "#fff";
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.stroke();
  }
  ctx.clearRect(0,0,canva.width, canva.height);
  fase();
  mouth();
  eyes(42,35);
  eyes(78,35);
}
function happyFase()
{
  function fase() {
    ctx.beginPath();
    ctx.arc(60, 60, 75, 0, 2 * Math.PI);
    ctx.strokeStyle = "#000";
    ctx.fillStyle = "#fff600";
    ctx.fill();
    ctx.stroke();
  }
  function mouth() {
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.arc(60, 80, 20, 0, Math.PI);
    ctx.lineWidth = 3;
    ctx.stroke();
  }
  function eyes(x, y) {
    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.strokeStyle = "#000";
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
  fase();
  mouth();
  eyes(38,35);
  eyes(82,35);
}


let canva = document.getElementById("canva");
let ctx = canva.getContext("2d");
sadFase();


// Geolocation Part
function getLocation() {
  let _location = navigator.geolocation;
  if (_location) {
    _location.getCurrentPosition(getPosition, errorPosition);
  } else {
    console.log("Browser not support Gps");
  }
}
function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  open("https://www.google.com/maps/@" + lat + "," + lon);
}
function errorPosition(errorPos) {
  let errMsg = document.getElementById("msg");
  errMsg.innerHTML =
    "Code: " + errorPos.code + "<br>" + "Message: " + errorPos.message;
}
