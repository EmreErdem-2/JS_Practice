

container = document.querySelector("#container");
let tileNum = 16;
createTiles(tileNum);
promptButton = document.querySelector("#promptButton")
    .addEventListener("click", ()=>{
        tileNum = prompt("Enter the number of tiles to sketch on");
        if(tileNum>100){
            alert("You can choose maximum of 100");
            tileNum = 100;
        }
        console.log(`You chose ${tileNum} tiles`);
        createTiles(tileNum);
    });

function createTiles(tileNum){
    container.innerHTML = "";
    for(let i = 0; i<tileNum; i++){
    const y = document.createElement("div");
    y.classList.add("row");
        for(let j = 0; j<tileNum; j++){
            let darkness = 255;
            const x = document.createElement("div");
            x.classList.add("column");
            x.textContent=j.toString();
            x.addEventListener('mouseenter', () => {
                console.log("mouseenter event");
                darkness = Math.max(0, darkness - 25); // Decrease brightness
                x.style.backgroundColor = `rgb(${darkness}, ${darkness}, ${darkness})`;
            });

            y.appendChild(x);
        }
    container.appendChild(y);
    }
}
