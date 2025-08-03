
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


let arr1 = ["I", "study", "JavaScript"];

// arr.splice(1, 1); // from index 1 remove 1 element
delete arr1[1]
console.log( arr1 ); // ["I", "JavaScript"]
console.log(arr1.length);

function sumTripleEvens(array) {
    return array.filter(num=>num%2===0)
                .map(num=>num*3)
                .reduce((total, current) => total + current, 0);
}
console.log(sumTripleEvens([1, 2, 3, 4, 5, 6])); // 36

function camelizer(string) {
    let arrayString = string.split('');
    for(let i=0; i<arrayString.length; i++){
        if(arrayString[i]=='-'){
            arrayString[i]='';
            arrayString[i+1]=arrayString[i+1].toUpperCase();
        }
    }

    return arrayString.join("");
}
console.log(camelizer("background-color"));
console.log(camelizer("list-style-image"));
console.log(camelizer("-webkit-transition"));

console.log("-----------------------------");
function filterRange(arr, a,b){
    return arr.filter(num => num>=a && num<=b)
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)
console.log(arr); // 5,3,8,1 (not modified)

console.log("-----------------------------");
let arr2 = [5, 2, 1, -10, 8];

arr2 = arr2.sort(function(a,b){return b-a});
console.log( arr2 ); // 8, 5, 2, 1, -10

console.log("-----------------------------");
let arr3 = ["HTML", "JavaScript", "CSS"];
function copySorted(array){
    let clone = [...array]; // clone = [1, 2, 3];
    return clone.sort();
}
let sorted = copySorted(arr3);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr3 ); // HTML, JavaScript, CSS (no changes)

console.log("-----------------------------");
let arr4 = [1, 2, 3];
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  console.log(array)
}
shuffle(arr4);
shuffle(arr4);
shuffle(arr4);

console.log("-----------------------------");
function unique(array) {
  return array.reduce(function(total,current){
    if(!total.includes(current)){
        total.push(current);
    }
    return total;
  },[]);
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O
console.log("-----------------------------");

