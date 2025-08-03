
const button = document.querySelector("button");
function greet(){
    const name = prompt("what is your name?");
    const greeting = document.querySelector("#greeting");
    greeting.textContent = `Hello, ${name}, nice to see you!`;
}

button.addEventListener("click", greet);


const age = 28;
const name = "Chris";
const greeting = `Hello, ${name} aged: ${age}`;
console.log(greeting); // "Hello, Chris"


const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."


const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

/*
One day you finally knew
what you had to do, and began,
*/
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string


function draw() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;
  function random(max) {
    return Math.random() * max;
  }

  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255 0 0 / 50%)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
const canvasButton = document.querySelector("#CanvasButton");
canvasButton.addEventListener("click", draw);


fizzButton = document.querySelector("#FizzbuzzButton");
fizzButton.addEventListener("click", () => {
    let a = parseInt(prompt("Enter a number: "))
    
    for(let i = 1; i<=a; i++){
        if(i % 3 === 0){
            console.log("Fizz");
        }
        if(i % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
});
