
class Character {
    #posX;
    #posY;
    
    constructor(posY = 15,posX = 19)
    {
        this.#posX = posX;
        this.#posY = posY;
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
    set posX (posY)
    {
        this.#posX = posY;
    };
    
    //METHODS
    moveUp()
    {
        if (this.#posY >= 0)
        {
            this.posY -=
            render();
        }
    }
    moveDown()
    {
        if (this.#posY <= 19)
        {
            this.posY +=
            render();
        }
    }
    moveLeft()
    {
        if (this.#posX >= 0)
        {
            this.posX -=
            render();
        }
    }
    moveRight()
    {
        if (this.#posX <= 29)
        {
            this.posX +=
            render();
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