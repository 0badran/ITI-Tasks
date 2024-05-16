var screenCalu = document.getElementById("Answer");
screenCalu.disabled = true;
screenCalu.style.backgroundColor = "white";
var evalExcute = String();

function EnterOperator(v) {
  screenCalu.value = evalExcute += v;
}
function EnterNumber(v) {
  screenCalu.value = evalExcute += v;
}

function EnterEqual() {
  try {
    screenCalu.value = evalExcute = eval(evalExcute);
  } catch (err) {
    /*  */
    alert(err.name);
  }
}
function EnterClear() {
  screenCalu.value = evalExcute = String();
}
