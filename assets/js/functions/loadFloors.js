export default function loadFloors(map)
{
    let id=0;
    for (let i=0; i<map.length; i++)
    {
        for (let j=0; j<map[i].length; j++)
        {
            let floor = map[i][j];
            let box = document.getElementById(id);
            
            if (floor === "G")
            {
                box.classList.add("grass");
            }
            else if (floor === "W")
            {
                box.classList.add("water");
            }
            else if (floor === "S")
            {
                box.classList.add("sand");
            }
            else if (floor === "D")
            {
                box.classList.add("dirt");
            }
            
            id++;
        }
    }
    
}