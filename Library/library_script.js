import * as utils from "./dom_utils.js";
window.myLibrary = [];

// myLibrary.push(new utils.Book("The Hobbit", "JRR Tolkien",255));
// myLibrary.push(new utils.Book("The LOTR", "JRR Tolkien",1414));
// myLibrary.push(new utils.Book("Star Wars", "Lucas",111));
// myLibrary.push(new utils.Book("Capital", "Karl Marx",900));

utils.addBookToLibrary(myLibrary,"The Hobbit", "JRR Tolkien",255,false);
utils.addBookToLibrary(myLibrary,"The LOTR", "JRR Tolkien",1414,false);
utils.addBookToLibrary(myLibrary,"Star Wars", "Lucas",111,false);
utils.addBookToLibrary(myLibrary,"Capital", "Karl Marx",900,false);

const div = document.querySelector("div");
const headersArr = ["ID","Title","Author","Pages","Read"];
let table = utils.createTable(headersArr)
div.appendChild(table);
utils.populateTable(myLibrary, table);