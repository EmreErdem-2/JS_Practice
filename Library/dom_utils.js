export function Book(title,author,pages) {
  if(!new.target){
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
}

export function addBookToLibrary(arr,title,author,pages) {
  let book = new Book(title,author,pages);
  arr.push(book);
}


export function createTable(headersArr){
    let table = document.createElement("table");
    let headerRow = table.insertRow();
    headersArr.forEach(element => {
        let cell = headerRow.insertCell();
        cell.textContent = element;
        cell.style.fontWeight = "bold";
    });

    return table;
}

export function addToTable(book, tbl){
    let row = tbl.insertRow();

    let idCell = row.insertCell();
    idCell.textContent = book.id;
    let titleCell = row.insertCell();
    titleCell.textContent = book.title;
    let authorCell = row.insertCell();
    authorCell.textContent = book.author;
    let pagesCell = row.insertCell();
    pagesCell.textContent = book.pages;
    
}

export function populateTable(bookArray, tbl){
    bookArray.forEach(element => {
        addToTable(element, tbl);
    });
}
