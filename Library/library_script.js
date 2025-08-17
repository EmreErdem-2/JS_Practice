import * as utils from "./dom_utils.js";
window.myLibrary = [];

utils.addBookToLibrary(myLibrary,"The Hobbit", "JRR Tolkien",255,false);
utils.addBookToLibrary(myLibrary,"The LOTR", "JRR Tolkien",1414,false);
utils.addBookToLibrary(myLibrary,"Star Wars", "Lucas",111,true);
utils.addBookToLibrary(myLibrary,"Capital", "Karl Marx",900,false);

const div = document.querySelector("div");
let table = utils.createTable()
div.appendChild(table);
utils.populateTable(myLibrary, table);

document.body.appendChild(utils.newBookButton());
utils.createModal();
