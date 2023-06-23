export default function loadObjects(objects)
{
    for (let object of objects)
    {
        let box = document.querySelector(`body .col-${object.posX}.row-${object.posY}`);
        if (object.type === "tree")
        {
            box.classList.add("tree");
        }
        else if (object.type === "rock")
        {
            box.classList.add("rock");
        }
        else if (object.type === "stump")
        {
            box.classList.add("stump");
        }
    }
}