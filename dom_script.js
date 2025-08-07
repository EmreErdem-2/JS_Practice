// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);


const p = document.createElement("p");
p.style.color="red";
p.textContent="Hey I'm red!";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.style.color ="blue";
h3.textContent="I'm blue h3!";
container.appendChild(h3);

const div = document.createElement("div");
div.style.border = "1px solid black";       // Sets border with color
div.style.backgroundColor = "pink";         // Sets background color
div.textContent = "This is the glorious text-content!";
const h1 = document.createElement("h1");
h1.textContent="I'm in a div!";
div.appendChild(h1);
const pp = document.createElement("p");
pp.textContent="ME TOO!";
div.appendChild(pp);

container.appendChild(div);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function (e) { 
  alertFunction();
  console.log("before"); 
  console.log(e.target.style.background); 
  if(e.target.style.background != "blue"){
    e.target.style.background="blue";
  } 
  else {
   e.target.style.background="red";
  }
  console.log("after"); 
  console.log(e.target.style.background); 
});

const buttons = document.querySelector("#container").childNodes;

console.log(buttons);
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        alert(button.id);
    });
});