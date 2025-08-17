export function Book(title,author,pages,read) {
  if(!new.target){
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

export function addBookToLibrary(arr,title,author,pages,read) {
  const book = new Book(title,author,pages,read);
  arr.push(book);
}


export function createTable(){
    const headersArr = ["ID","Title","Author","Pages","Read"];
    const table = document.createElement("table");
    const headerRow = table.insertRow();
    headersArr.forEach(element => {
        const cell = headerRow.insertCell();
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
    const tbl = document.querySelector("table");
    const headerRow = tbl.rows[0];
    tbl.innerHTML = "";
    tbl.appendChild(headerRow);
    populateTable(books, tbl);
}
function createRemoveButton(row,myLibrary){
    const remButt = document.createElement("button");
    remButt.style.backgroundColor = "red";
    remButt.textContent = "Delete";
    remButt.addEventListener("click", ()=>{
        removeFromArray(myLibrary,row.dataset.id);
    });

    return remButt;
}
function createCheckbox(book){
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = book.read ? true : false;
    checkbox.addEventListener("change", (e)=>{
        book.read = e.target.checked;
        console.log("book: "+book.read);
    });
    return checkbox
}
export function addToTable(book, tbl, myLibrary){
    const row = tbl.insertRow();
    row.setAttribute("data-id", book.id);

    const idCell = row.insertCell();
    idCell.textContent = book.id;
    const titleCell = row.insertCell();
    titleCell.textContent = book.title;
    const authorCell = row.insertCell();
    authorCell.textContent = book.author;
    const pagesCell = row.insertCell();
    pagesCell.textContent = book.pages;
    const readCell = row.insertCell();
    const checkbox = createCheckbox(book);
    readCell.appendChild(checkbox);
    
    
    let removeCell = row.insertCell();
    
    removeCell.appendChild(createRemoveButton(row,myLibrary))
}

export function populateTable(bookArray, tbl){
    bookArray.forEach(element => {
        addToTable(element, tbl,bookArray);
    });
}

export function createModal() {
  const button = document.createElement("button");
  button.textContent = "New Book";

  const modal = document.createElement("div");
  modal.className = "modal";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const closeBtn = document.createElement("span");
  closeBtn.className = "close";
  closeBtn.innerHTML = "&times;";

  const content = document.createElement("p");
  content.textContent = "This is";

  button.onclick = () => modal.style.display = "block";
  closeBtn.onclick = () => modal.style.display = "none";

  modalContent.appendChild(closeBtn);
  modalContent.appendChild(content);
  modal.appendChild(modalContent);

  document.body.appendChild(button);
  document.body.appendChild(modal);
}



export function newBookButton(bookArray){
    const newBookButt = document.createElement("button");
    remButt.style.backgroundColor = "yellow";
    remButt.textContent = "New Book";
    remButt.addEventListener("click", ()=>{
        //Create input card
    });

    return remButt;
}