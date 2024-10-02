import { fetchData } from "./data.js";
import { IDragonBallResponse } from "./types.js";

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

const updateIU = async () => {
  try {
    const data = await getData();

    if (data) {
      data.items.forEach((element) => {
        const contenido = document.createElement("div");
        contenido.classList.add(
          "flex",
          "flex-col",
          "w-11/12",
          "h-auto",
          "rounded-xl",
          "bg-gradient-to-r",
          "from-neutral-300",
          "to-stone-400"
        );

        contenido.innerHTML = `        
          <img class="p-2 object-contain rounded-t-lg h-96 transform hover:scale-125 transition-transform duration-300" src="${element.image}" alt="${element.name}" />
         
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
      });
    }
  } catch (err) {
    console.log(err);
  }
};

updateIU();
