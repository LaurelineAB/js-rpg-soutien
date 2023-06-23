
class Character {
    #posX;
    #posY;
    #godMode;
    #axe;
    
    constructor(posY = 15, posX = 19)
    {
        this.#posX = posX;
        this.#posY = posY;
        this.#godMode = false;
        this.#axe = false;
    };
    
    get posX()
    {
        return this.#posX;
    };
    set posX (posX)
    {
        this.#posX = posX;
    };
    
    get posY()
    {
        return this.#posY;
    };
    set posY (posY)
    {
        this.#posX = posY;
    };
    
    get godMode()
    {
        return this.#godMode;
    }
    set godMode (godMode)
    {
        this.#godMode = godMode;
    }
    
    get axe()
    {
        return this.#axe;
    }
    set axe (axe)
    {
        this.#axe = axe;
    }
    
    //METHODS
    moveUp()
    {
        let newPosition = document.querySelector(`.col-${this.#posX}.row-${this.#posY-1}`);
        if (this.#posY >= 0 && this.#godMode === true)
        {
            this.#posY = this.#posY - 1;
            this.render();
        }
        else if (this.#posY >= 0 && !newPosition.classList.contains("water") && !newPosition.classList.contains("rock") && !newPosition.classList.contains("tree") && !newPosition.classList.contains("stump") && this.#godMode === false)
        {
            this.#posY = this.#posY - 1;
            this.render();
        }
    }
    moveDown()
    {
        let newPosition = document.querySelector(`.col-${this.#posX}.row-${this.#posY+1}`);
        if (this.#posY <= 19 && this.#godMode === true)
        {
            this.#posY = this.#posY + 1;
            this.render();
        }
        else if (this.#posY <= 19 && !newPosition.classList.contains("water") && !newPosition.classList.contains("rock") && !newPosition.classList.contains("tree") && !newPosition.classList.contains("stump") && this.#godMode === false)
        {
            this.#posY = this.#posY + 1;
            this.render();
        }
    }
    moveLeft()
    {
        let newPosition = document.querySelector(`.col-${this.#posX-1}.row-${this.#posY}`);
        if (this.#posX >= 0 && this.#godMode === true)
        {
            this.#posX = this.#posX - 1;
            this.render();
        }
        else if (this.#posX >= 0 && !newPosition.classList.contains("water") && !newPosition.classList.contains("rock") && !newPosition.classList.contains("tree") && !newPosition.classList.contains("stump") && this.#godMode === false)
        {
            this.#posX = this.#posX - 1;
            this.render();
        }
    }
    moveRight()
    {
        let newPosition = document.querySelector(`.col-${this.#posX+1}.row-${this.#posY}`);
        if (this.#posX <= 29 && this.#godMode === true)
        {
            this.#posX = this.#posX + 1;
            this.render();
        }
        else if (this.#posX <= 29 && !newPosition.classList.contains("water") && !newPosition.classList.contains("rock") && !newPosition.classList.contains("tree") && !newPosition.classList.contains("stump") && this.#godMode === false)
        {
            this.#posX = this.#posX + 1;
            this.render();
        }
    }
    render()
    {
        let boxes = document.querySelectorAll("section");
        //Sans boucle, récupérer la case avec ".character" seulement
        for (let box of boxes)
        {
            box.classList.remove("character");
            box.classList.remove("axe");
            let newPosition = document.querySelector(`.col-${this.#posX}.row-${this.#posY}`);
            newPosition.classList.add("character");
            if (this.#axe === true)
            {
                newPosition.classList.add("axe");
            }
        }
    }
    cutTree()
    {
        let boxUp = document.querySelector(`.col-${this.#posX}.row-${this.#posY-1}`);
        let boxDown = document.querySelector(`.col-${this.#posX}.row-${this.#posY+1}`);
        let boxLeft = document.querySelector(`.col-${this.#posX-1}.row-${this.#posY}`);
        let boxRight = document.querySelector(`.col-${this.#posX+1}.row-${this.#posY}`);
        let aroundBoxes = [boxUp, boxDown, boxLeft, boxRight];
        if (this.#axe === true)
        {
            for (let box of aroundBoxes)
            {
                if (box.classList.contains("tree"))
                {
                    box.classList.remove("tree");
                    box.classList.add("log");
                }
            }
        }
    }
}

export { Character };