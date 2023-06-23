
class Character {
    #posX;
    #posY;
    #godMode;
    
    constructor(posY = 15, posX = 19)
    {
        this.#posX = posX;
        this.#posY = posY;
        this.#godMode = false;
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
        for (let box of boxes)
        {
            box.classList.remove("character");
            let newPosition = document.querySelector(`.col-${this.#posX}.row-${this.#posY}`);
            newPosition.classList.add("character");
        }
    }
}

export { Character };