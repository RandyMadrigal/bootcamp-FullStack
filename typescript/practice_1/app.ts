document.addEventListener("DOMContentLoaded", () => {

    const DEFAULT_VALUE : number= 0

    const btnSumar = document.getElementById("btnSumar") as HTMLButtonElement;
    const resultado = document.getElementById("resultado") as HTMLParagraphElement 

    btnSumar.addEventListener("click", () : void  =>{
       resultado.textContent =  sumar().toString();
       cleanInput();
    })

    const sumar = () : number  => {
        const numero1Element = document.getElementById("num1") as HTMLInputElement;
        const numero2Element = document.getElementById("num2")  as HTMLInputElement;
        let result : number;

       isValidate(numero1Element.value,numero2Element.value) ? 
       result = parseInt(numero1Element.value) + parseInt(numero2Element.value) 
       : result = DEFAULT_VALUE;

       return result     
    }

    const isValidate = (num1 : string , num2 : string) : boolean => {
        let validate : boolean = true;

        if(num1.length === 0 || num2.length === 0){
            validate = false
            alert("Completar todos los campos.")
        };

        return validate;
    }

    const cleanInput = () : void => {
        const clean = document.querySelectorAll("input")
       console.log(clean)
        clean.forEach( el => {
            
            el.value = "";
        })
    }

})





