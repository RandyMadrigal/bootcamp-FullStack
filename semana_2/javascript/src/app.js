//Constantes para comparar los valores por defecto del select
const CELSIUS = "CELSIUS";
const KELVIN = "KELVIN";
const FAHRENHEIT = "FAHRENHEIT";

//Variables para acceder y modificar el DOM.
const temperature = document.getElementById("Temperatura");
const From = document.getElementById("From");
const To = document.getElementById("To");
const form = document.getElementById("form");
const btnEnviar = document.getElementById("btnEnviar");
const btnClean = document.getElementById("btnClean");
const sectionResult = document.getElementById("resultado");
const title = document.getElementById("title");
const date = document.getElementById("date");

//colocar fecha actual en el footer
date.innerText = new Date().getFullYear();

//Creando instancia de Typed.js libreria para animacion del titulo
let typed = new Typed("#title", {
  strings: [
    "Convert to - Celsius",
    "Convert to - Kelvin",
    "Convert to - Fahrenheit",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  shuffle: true,
  loop: true,
  smartBackspace: true,
});

//agregar evento al formulario para no actualizar la pagina al presionar el btn tipo submit.
form.addEventListener("submit", (e) => e.preventDefault());

//Agregar evento al Btn confirmar
btnEnviar.addEventListener("click", () => {
  //validar si el usuario ingresa un valor en el input.
  if (temperature.value === "") {
    alert("Ingresa un valor");
    return;
  }

  //validar si la seleccion de escala del usuario es igual
  //en este caso no se realiza la conversion.
  if (From.value === To.value) {
    alert("selecciona escalas diferentes");
    return;
  }

  //almacenar en una variable el resultado de la operacion de conversion correspondiente
  const result = convert(Number(temperature.value), From.value, To.value);

  //funcion para mostrar resultado en pantalla.
  showResult(result, To.value);
});

// Agregar evento al btn clean
// para limpiar los campos.
btnClean.addEventListener("click", () => {
  sectionResult.innerText = "";
  temperature.value = "1";
});

/*
1) funcion para convertir la escala en base a la seleccion del usuario
   se crea un objeto para realizar un acceso dinamico a 
   las propiedas del objeto. ej:

2) [CELSIUS A KELVIN] : (function)
   [KELVIN A CELSIUS] : (function)
   [FAHRENHEIT A KELVIN] : (function)

3) Este objeto tiene como valor una funcion que realiza la conversion dependiendo del tipo 
   operacion que el usuario quiera realizar, por ultimo se retorna el resultado obtenido.

*/
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

//Mostrar resultado en pantalla.
const showResult = (result, to) => {
  sectionResult.innerHTML = `<h2>${result.toFixed(2)}° ${to} </h2>`;
};
