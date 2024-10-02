var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchData } from "./data.js";
const divContainer = document.getElementById("character-container");
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield fetchData();
        return data;
    }
    catch (err) {
        console.log(err);
    }
});
const updateIU = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield getData();
        if (data) {
            data.items.forEach((element) => {
                const contenido = document.createElement("div");
                contenido.classList.add("flex", "flex-col", "w-11/12", "h-auto", "rounded-xl", "bg-gradient-to-r", "from-neutral-300", "to-stone-400");
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
                divContainer === null || divContainer === void 0 ? void 0 : divContainer.appendChild(contenido);
            });
        }
    }
    catch (err) {
        console.log(err);
    }
});
updateIU();
