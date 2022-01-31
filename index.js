function suma(numb1, numb2) {
  return Number(numb1) + Number(numb2);
}
function resta(numb1, numb2) {
  return Number(numb1) - Number(numb2);
}
function division(numb1, numb2) {
  return Number(numb1) / Number(numb2);
}
function multiplicacion(numb1, numb2) {
  return Number(numb1) * Number(numb2);
}
function elevar(numb1, numb2) {
  return Math.pow(Number(numb1), Number(numb2));
}

const firstNumb = document.getElementById("first");
const signo = document.getElementById("signo");
const secondNumb = document.getElementById("second");
const resultado = document.querySelector(".result");
const boton = document.querySelector(".button");
const reset = document.querySelector(".reset");
function main() {
  console.log(boton);
  boton.addEventListener("click", function (e) {
    e.preventDefault;
    check();
  });
  reset.addEventListener("click", function (e) {
    e.preventDefault;
    console.log(e);
    firstNumb.value = "";
    secondNumb.value = "";
    resultado.textContent = "0";
  });
}

function check() {
  if (signo.value == "+") {
    const res = suma(firstNumb.value, secondNumb.value);
    console.log(res);
    resultado.textContent = res.toString().substring(0, 7);
  } else if (signo.value == "-") {
    res = resta(firstNumb.value, secondNumb.value);
    console.log(res);
    resultado.textContent = res.toString().substring(0, 7);
  } else if (signo.value == "/") {
    res = division(firstNumb.value, secondNumb.value);
    console.log(res);
    resultado.textContent = res.toString().substring(0, 7);
  } else if (signo.value == "*") {
    res = multiplicacion(firstNumb.value, secondNumb.value);
    console.log(res);
    resultado.textContent = res.toString().substring(0, 7);
  } else if (signo.value == "^") {
    res = elevar(firstNumb.value, secondNumb.value);
    console.log(res);
    resultado.textContent = res.toString().substring(0, 7);
  }
}
main();
