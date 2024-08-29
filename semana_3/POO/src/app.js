class Persona {
  constructor(nombre, edad, ...intereses) {
    this.nombre = nombre;
    this.edad = edad;
    this.intereses = intereses;
  }

  AñadirInteres(...str) {
    this.intereses.push(...str);
  }

  EliminarInteres(str) {
    const index = this.intereses.findIndex(
      (i) => i.toUpperCase() === str.toUpperCase()
    );
    if (index < 0) {
      console.log("no data");
      return;
    }
    this.intereses.splice(index, 1);
  }

  MostrarIntereses() {
    console.log(`
      **************************************
      Los intereses de ${this.nombre} son:
      ${this.intereses}
      ************************************** 
       `);
  }

  MostrarInformacion() {
    console.log(`
      *************************************
      Nombre: ${this.nombre}             
      Edad: ${this.edad}                 
      Intereses: ${this.intereses}       
      *************************************`);
  }
}

const randy = new Persona(
  "Randy Madrigal",
  18,
  "Software",
  "Gym",
  "Basketball"
);

randy.AñadirInteres("Android", "Typescript", "Cars");
randy.EliminarInteres("basketball");
randy.MostrarIntereses();
randy.MostrarInformacion();
