

container = document.querySelector("#container");
let tileNum = 16;
createTiles(tileNum);
promptButton = document.querySelector("#promptButton")
    .addEventListener("click", ()=>{
        tileNum = prompt("Enter the number of tiles to sketch on");
        console.log(`You chose ${tileNum} tiles`);
        createTiles(tileNum);
    });

function createTiles(tileNum){
    for(let i = 0; i<tileNum; i++){
    const y = document.createElement("div");
        for(let j = 0; j<tileNum; j++){
            const x = document.createElement("div");
            x.textContent=j.toString();
            y.appendChild(x);
        }
    container.appendChild(y);
    }
}
