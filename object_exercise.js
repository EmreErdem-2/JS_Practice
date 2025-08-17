let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = [];
names.push(...users.map(item=>item.name));
console.log( names ); // John, Pete, Mary



let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [ john2, pete2, mary2 ];

let usersMapped = users2.map(users2=>({fullName:users2.name+" "+users2.surname,id:users2.id}));

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

console.log( usersMapped ) // 1
console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith




let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 28 };

let arr = [ pete3, john3, mary3 ];

function sortByAge(arr){
    return arr.sort((a,b)=>a.age-b.age);
}

console.log("Sort by age changing the array: ");
console.log(sortByAge(arr));

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete


let john4 = { name: "John", age: 25 };
let pete4 = { name: "Pete", age: 30 };
let mary4= { name: "Mary", age: 29 };

let arr2 = [ john4, pete4, mary4 ];

function getAverageAge(arr2){
    let sum = 0;
    arr2.forEach(element => {
        sum += element.age;
    });
    return sum / arr2.length;
}
function getAverageAgeAlternate(users){
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

console.log( getAverageAgeAlternate(arr2) ); // (25 + 30 + 29) / 3 = 28



let users5 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
function groupById(users){
    return users.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}
let usersById = groupById(users5);
console.log(usersById);

// Object Constructor
function Book(title,author,pages,read){
  if(!new.target){
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title=title;
  this.author=author;
  this.pages=pages;
  this.read=read;
  this.info=function(){
    return this.title+" by "+this.author+", "+pages+" pages, "+`${this.read? "already read" : "not read yet"}`;
  }
}

const theHobbit = new Book("The Hobbit", "JRR Tolkien",255, true);
console.log(theHobbit.info());


function Player(name, marker) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
  this.marker = marker;
  this.sayName = function() { console.log(this.name)};
}
const player1 = new Player('steve', 'X');
const player2 = new Player('martin', 'N');
console.log(player1.name); // 'steve'
player2.sayName();

function Person(name) {
  this.name = name;
}
Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}`);
};

console.log("prototype of Player.prototype "+Object.getPrototypeOf(Player.prototype));

Object.setPrototypeOf(Player.prototype, Person.prototype);
console.log("prototype of Player.prototype "+Object.getPrototypeOf(Player.prototype));

// Prototype Practice
let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};
Object.setPrototypeOf(table, head);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(pockets, bed);

// alert( pockets.pen ); // 3
// alert( bed.glasses ); // 1
// alert( table.money ); // undefined

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
// That’s because this is an object before the dot, so rabbit.eat() modifies rabbit.
// Property lookup and execution are two different things.
// The method rabbit.eat is first found in the prototype, then executed with this=rabbit.

