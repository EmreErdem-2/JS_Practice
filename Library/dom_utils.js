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

function removeFromArray(books,targetId){
    const index = books.findIndex(book => book.id === targetId);
    if (index !== -1) {
    books.splice(index, 1); // removes the item in-place
    }
}
function removeButton(row,myLibrary){
    const remButt = document.createElement("button");
    remButt.style.backgroundColor = "red";
    remButt.addEventListener("click", ()=>{
        removeFromArray(myLibrary,row.dataset.id);
    });

    return remButt;
}

export function addToTable(book, tbl, myLibrary){
    let row = tbl.insertRow();
    row.setAttribute("data-id", book.id);

    let idCell = row.insertCell();
    idCell.textContent = book.id;
    let titleCell = row.insertCell();
    titleCell.textContent = book.title;
    let authorCell = row.insertCell();
    authorCell.textContent = book.author;
    let pagesCell = row.insertCell();
    pagesCell.textContent = book.pages;
    
    let removeCell = row.insertCell();
    
    removeCell.appendChild(removeButton(row,myLibrary))
}

export function populateTable(bookArray, tbl){
    bookArray.forEach(element => {
        addToTable(element, tbl);
    });
}
