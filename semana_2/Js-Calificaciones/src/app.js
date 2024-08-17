//Estado inicial de la aplicacion
const calificaciones = [
  { nombre: "Juan", calificacion: 85, materia: "Desarrollo FullStack" },
  { nombre: "Ana", calificacion: 50, materia: "Desarrollo FullStack" },
  { nombre: "Pedro", calificacion: 78, materia: "Desarrollo FullStack" },
  { nombre: "Lucía", calificacion: 88, materia: "Desarrollo FullStack" },
  { nombre: "Carlos", calificacion: 76, materia: "Desarrollo FullStack" },
  { nombre: "María", calificacion: 59, materia: "Desarrollo FullStack" },
  { nombre: "Luis", calificacion: 84, materia: "Desarrollo FullStack" },
  { nombre: "Laura", calificacion: 40, materia: "Desarrollo FullStack" },
  { nombre: "Jorge", calificacion: 80, materia: "Desarrollo FullStack" },
  { nombre: "Sofía", calificacion: 89, materia: "Desarrollo FullStack" },
];

const CALIFICACION_REPROBADO = 60;
const APROBADO = "APROBADO";
const REPROBADO = "REPROBADO";
const MATERIA = "Desarrollo FullStack";
const INICIO = "INICIO";
const CANTIDAD_A_ELIMINAR = 1;
let isSort = false;

//table
const tBody = document.getElementById("content");

//Form
const form = document.querySelector("form");
const inputName = document.getElementById("Name");
const inputCalificacion = document.getElementById("Calificacion");
const inputSelect = document.getElementById("Select");
const btnAgregar = document.getElementById("Agregar");

//Section de promedio
const setPromedio = document.getElementById("promedio");
const setEncimaPromedio = document.getElementById("encima_promedio");
const SetDebajoPromedio = document.getElementById("debajo_promedio");
const setAprobados = document.getElementById("aprobados");
const setReprobados = document.getElementById("reprobados");

//Modal
const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");
const cancel = document.getElementById("close-modal");

//Ordenar
const btnOrdenar = document.getElementById("ordenar");

//Actualizar intefaz de usuario
const updateUI = () => {
  setAlert(calificaciones);

  //ITERAR SOBRE ARREGLO CALIFICACIONES
  calificaciones.forEach((info) => {
    let notApproved = true; // PARA AGREGAR ESTILO SI EL ESTUDIANTE ESTA REPROBADO

    //VERIFICAR SI EL ESTUDIANTE ESTA "REPROBADO / APROBADO"
    const ESTADO =
      info.calificacion >= CALIFICACION_REPROBADO ? APROBADO : REPROBADO;

    ESTADO === REPROBADO ? notApproved : (notApproved = false);

    const tr = document.createElement("tr");
    tr.innerHTML = `
                    <td>${info.nombre}</td>
                    <td>${info.calificacion}</td>
                    <td>${info.materia}</td>
                    <td class=${
                      notApproved ? "notApproved" : ""
                    } >${ESTADO}</td>
                    <td><button id=${info.nombre} 
                    } class="btn-delete"">Eliminar</button></td>
                    `;
    tBody.appendChild(tr);
  });

  //Evento al boton de ELIMINAR
  const btnDelete = document.querySelectorAll(".btn-delete"); //delete

  btnDelete.forEach((button) => {
    button.addEventListener("click", (e) => {
      handleDelete(e.target.id);
    });
  });

  //llamar funciones encargadas de actualizar la seccion de estadisticas
  getPromedio();
  isAprobado();
  getEncimaPromedio();
  getDebajoPromedio();
};

//e.preventDefault();
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

//Eventos para manejar modal
openModal.addEventListener("click", () => {
  modal.style.display = "block"; //mostrar modal.
});

cancel.addEventListener("click", () => {
  modal.style.display = "none"; //ocultar modal.
});

//Agregar estudiante
btnAgregar.addEventListener("click", () => {
  //verificar todos los campos
  if (
    inputName.value === "" ||
    inputSelect.value === "" ||
    inputCalificacion.value === ""
  ) {
    alert("Debe completar todos los campos");
    return;
  }

  //verificar rango de calificaciones 0 / 100
  if (
    Number(inputCalificacion.value) > 100 ||
    Number(inputCalificacion.value < 0)
  ) {
    alert("calificacion fuera de rango");
    modal.style.display = "none";
    return;
  }

  //Objeto que se agrega al arreglo
  const data = {
    nombre: inputName.value,
    calificacion: Number(inputCalificacion.value), //convertir a tipo number
    materia: MATERIA,
  };

  //elegir metodo de agregar " INICIO / FINAL "
  inputSelect.value === INICIO
    ? calificaciones.unshift(data)
    : calificaciones.push(data);

  modal.style.display = "none";

  cleanUI(); //Limpiar UI
  updateUI(); // Actualizar UI con la nueva informacion
});

//Evento ordenar
btnOrdenar.addEventListener("click", () => {
  sorted(calificaciones, isSort);
  cleanUI();
  updateUI();
});

//Eliminar estudiante con el metodo splice() pasando el index de la calificacion a eliminar
const handleDelete = (id) => {
  try {
    const index = calificaciones.findIndex((data) => data.nombre === id); //buscar indice de elemento a eliminar
    calificaciones.splice(index, CANTIDAD_A_ELIMINAR); // en la posicion del index, elimina un elemento
    cleanUI(); //LIMPIAR UI
    updateUI(); // ACTUALIZAR UI CON LA NUEVA INFORMACION
  } catch (err) {
    console.log(err);
  }
};

//Limpiar UI
const cleanUI = () => {
  tBody.innerHTML = "";
  inputName.value = "";
  inputCalificacion.value = "";
  setPromedio.innerText = "";
  setAprobados.innerText = "";
  setReprobados.innerText = "";
  setEncimaPromedio.innerHTML = "";
  SetDebajoPromedio.innerHTML = "";
};

//Mostrar mensaje cuando ya no quedan estudiantes en el arreglo. arr = arreglo
const setAlert = (arr) => {
  if (arr.length === 0) {
    const setAlert = document.createElement("h2");
    setAlert.innerText = `No hay informacion para mostrar `;
    tBody.appendChild(setAlert);
  }
};

//Formula para retornar el promedio
const formulaPromedio = () => {
  try {
    const total = calificaciones.length; //cantidad de elementos en el arreglo
    let suma = 0;

    //iterar sobre todas las calificaciones.
    for (const num of calificaciones) {
      suma += num.calificacion;
    }

    const promedio = suma / total;

    return promedio;
  } catch (err) {
    console.log(err);
  }
};

//Promedio de calificaciones
const getPromedio = () => {
  const total = formulaPromedio();

  setPromedio.innerText =
    total === 0 || isNaN(total) ? "No hay suficiente data" : total.toFixed(2);
};

//Estudiantes aprobados y reprobados.
const isAprobado = () => {
  let aprobado = 0;
  let reprobado = 0;

  //iterar sobre todas las calificaciones
  for (const num of calificaciones) {
    if (num.calificacion >= CALIFICACION_REPROBADO) {
      aprobado++;
    } else {
      reprobado++;
    }
  }

  setAprobados.innerText += aprobado;
  setReprobados.innerText += reprobado;
};

//obtener promedio por encima
const getEncimaPromedio = () => {
  try {
    const totalPromedio = formulaPromedio();

    //filtrar calificaciones que sean mayor que el promedio
    const encima_promedio = calificaciones.filter(
      (num) => num.calificacion > totalPromedio
    );

    //si el filtro devuelve 0
    if (encima_promedio.length === 0) {
      const li = document.createElement("li");
      li.innerHTML = `<p> no hay suficiente data </p>`;
      setEncimaPromedio.appendChild(li);
    } else {
      // muestro la informacion filtrada en la UI
      encima_promedio.map((estudiante) => {
        const li = document.createElement("li");
        li.innerHTML = `<li>${estudiante.nombre} : ${estudiante.calificacion}  </li>`;
        setEncimaPromedio.appendChild(li);
      });
    }
  } catch (err) {
    console.log(err);
  }
};

//obtener promedio por debajo
const getDebajoPromedio = () => {
  const totalPromedio = formulaPromedio();

  //filtrar calificaciones que sean mayor que el promedio
  const debajo_promedio = calificaciones.filter(
    (num) => num.calificacion < totalPromedio
  );

  if (debajo_promedio.length === 0) {
    const li = document.createElement("li");
    li.innerHTML = `<p> no hay suficiente data </p>`;
    SetDebajoPromedio.appendChild(li);
  } else {
    // muestro la informacion filtrada en la UI
    debajo_promedio.map((estudiante) => {
      const li = document.createElement("li");
      li.innerHTML = `<li>${estudiante.nombre} : ${estudiante.calificacion}  </li>`;
      SetDebajoPromedio.appendChild(li);
    });
  }
};

//Filtro
const sorted = (arr, bool) => {
  if (bool) {
    //ASCENDENTE
    arr.sort((a, b) => a.calificacion - b.calificacion);
    isSort = false;
  } else {
    //DESCENDENTE
    arr.sort((a, b) => b.calificacion - a.calificacion);
    isSort = true;
  }

  console.log(bool);
};

updateUI(); //Llamada a la funcion que actualiza la UI
