import * as utils from "./dom_utils.js";

const myLibrary = [];



// myLibrary.push(new utils.Book("The Hobbit", "JRR Tolkien",255));
// myLibrary.push(new utils.Book("The LOTR", "JRR Tolkien",1414));
// myLibrary.push(new utils.Book("Star Wars", "Lucas",111));
// myLibrary.push(new utils.Book("Capital", "Karl Marx",900));

utils.addBookToLibrary("The Hobbit", "JRR Tolkien",255);
utils.addBookToLibrary("The LOTR", "JRR Tolkien",1414);
utils.addBookToLibrary("Star Wars", "Lucas",111);
utils.addBookToLibrary("Capital", "Karl Marx",900);

const div = document.querySelector("div");
const headersArr = ["ID","Title","Author","Pages"];
let table = utils.createTable(headersArr)
div.appendChild(table);



utils.populateTable(myLibrary, table);