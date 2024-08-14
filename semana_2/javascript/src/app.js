const CELSIUS = "CELSIUS";
const KELVIN = "KELVIN";
const FAHRENHEIT = "FAHRENHEIT";

const temperatura = document.getElementById("Temperatura");
const From = document.getElementById("From");
const To = document.getElementById("To");
const form = document.getElementById("form");
const btnEnviar = document.getElementById("btnEnviar");
const sectionResult = document.getElementById("resultado");

form.addEventListener("submit", (e) => e.preventDefault());

btnEnviar.addEventListener("click", () => {
  if (From.value === To.value) {
    alert("selecciona escalas diferentes");
    return;
  }

  const result = convert(Number(temperatura.value), From.value, To.value);

  showResult(result, To.value);
});

const convert = (value, from, to) => {
  const result = {
    [`${CELSIUS}-${KELVIN}`]: (VALUE) => VALUE + 273.15,
    [`${CELSIUS}-${FAHRENHEIT}`]: (VALUE) => (VALUE * 9) / 5 + 32,
    [`${KELVIN}-${CELSIUS}`]: (VALUE) => VALUE - 273.15,
    [`${KELVIN}-${FAHRENHEIT}`]: (VALUE) => ((VALUE - 273.15) * 9) / 5 + 32,
    [`${FAHRENHEIT}-${CELSIUS}`]: (VALUE) => ((VALUE - 32) * 5) / 9,
    [`${FAHRENHEIT}-${KELVIN}`]: (VALUE) => ((VALUE - 32) * 5) / 9 + 273.15,
  };

  return result[`${from}-${to}`](value);
};

const showResult = (result, to) => {
  sectionResult.innerHTML = `<h2>${result.toFixed(2)}° ${to} </h2>`;
};
