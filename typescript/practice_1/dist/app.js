"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DEFAULT_VALUE = 0;
const btnSumar = document.getElementById("btnSumar");
const resultado = document.getElementById("resultado");
btnSumar.addEventListener("click", () => {
    resultado.textContent = sumar().toString();
    cleanInput();
});
const sumar = () => {
    const numero1Element = document.getElementById("num1");
    const numero2Element = document.getElementById("num2");
    let result;
    if (isValidate(numero1Element.value, numero2Element.value)) {
        result = parseInt(numero1Element.value) + parseInt(numero2Element.value);
    }
    else {
        result = DEFAULT_VALUE;
    }
    return result;
};
const isValidate = (num1, num2) => {
    let validate = true;
    if (num1.length === 0 || num2.length === 0) {
        validate = false;
        alert("Completar todos los campos.");
    }
    ;
    return validate;
};
const cleanInput = () => {
    const clean = document.querySelectorAll("input");
    console.log(clean);
    clean.forEach(el => {
        el.value = "";
    });
};
exports.default = isValidate;
