
class Character {
    #posX;
    #posY;
    
    constructor(posY = 15, posX = 19)
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
    set posY (posY)
    {
        this.#posX = posY;
    };
    
    //METHODS
    moveUp()
    {
        if (this.#posY >= 0)
        {
            this.#posY = this.#posY - 1;
            this.render();
        }
    }
    moveDown()
    {
        if (this.#posY <= 19)
        {
            this.#posY = this.#posY + 1;
            this.render();
        }
    }
    moveLeft()
    {
        if (this.#posX >= 0)
        {
            this.#posX = this.#posX - 1;
            this.render();
        }
    }
    moveRight()
    {
        if (this.#posX <= 29)
        {
            this.#posX = this.#posX + 1;
            this.render();
        }
    }
    render()
    {
        console.log(this.#posY, this.posX);
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