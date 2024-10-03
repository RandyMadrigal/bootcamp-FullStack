import { fetchData } from "./data.js";
import { IDragonBall, IDragonBallResponse } from "./types";

const divContainer = document.getElementById("character-container") as
  | HTMLDivElement
  | undefined;

const getData = async (): Promise<IDragonBallResponse | undefined> => {
  try {
    const data = await fetchData();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const createCard = (element: IDragonBall) => {
  const contenido = document.createElement("div");

  if (contenido) {
    observer.observe(contenido);
  }
  contenido.classList.add(
    "flex",
    "flex-col",
    "w-11/12",
    "h-auto",
    "rounded-xl",
    "bg-gradient-to-r",
    "from-neutral-300",
    "to-stone-400",
    "animation-card"
  );

  contenido.innerHTML = `        
    <img class="p-2 object-contain rounded-t-lg h-96 transform hover:scale-125 transition-transform duration-1000" src="${element.image}" alt="${element.name}" />
   
    <div class="bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-xl rounded-t-none">
      <div class="flex flex-col justify-start p-3"> 
        <h2 class="text-xl font-bold">${element.name}</h2>
        <h4 class="text-lg text-yellow-500">${element.race} - ${element.gender} </h4>
      </div>

      <div class="flex flex-col justify-start p-3"> 
        <h2 class="text-lg">Affiliation:</h2>
        <h4 class="text-lg text-yellow-500 ">${element.affiliation} </h4>
      </div>
    <div>
  `;

  divContainer?.appendChild(contenido);
};

const updateIU = async () => {
  try {
    const data = await getData();

    if (data) {
      data.items.forEach((element) => {
        createCard(element);
      });
    }
  } catch (err) {
    console.log(err);
  }
};

//#region Observer(Callback,options);

const callback: IntersectionObserverCallback = (elements) => {
  elements.forEach((element) => {
    element.target.classList.toggle("show", element.isIntersecting);
  });
};

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer: IntersectionObserver = new IntersectionObserver(
  callback,
  options
);

//#endregion

updateIU();
