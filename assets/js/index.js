import initMap from "./functions/initMap.js";
import { Character } from "./classes/character.js";

window.addEventListener("DOMContentLoaded", function(){
    initMap(20, 30);
    let character = new Character();
    character.render();

    window.addEventListener("keydown", function(event)
    {
        if (event.key === "z")
        {
            character.moveUp();
        }
        else if (event.key === "s")
        {
            character.moveDown();
        }
        else if (event.key === "q")
        {
            character.moveLeft();
        }
        else if (event.key === "d")
        {
            character.moveRight();
        }
    });
    
    window.addEventListener("keypress", function(event)
    {
        if (event.key === "g")
        {
            character.godMode = !character.godMode;
        }
    });
    
    window.addEventListener("keypress", function(event)
    {
        if (event.key === "a")
        {
            character.axe = !character.axe;
            console.log(character.axe);
            character.render();
        }
    });
    
    window.addEventListener("keypress", function(event)
    {
        if (event.key === "c")
        {
            character.cutTree();
        }
    });
});