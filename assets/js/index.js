import initMap from "./functions/initMap.js";
import { Character } from "./classes/character.js";

window.addEventListener("DOMContentLoaded", function(){
    initMap(20, 30);
    let character = new Character();
    character.render();
});