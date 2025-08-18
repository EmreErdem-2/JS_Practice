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
    return checkbox;
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

function createInputField(labelText) {
    const div = document.createElement("div");
    const label = document.createElement("span");
    const input = document.createElement("input");

    div.classList.add("field-wrapper");
    label.classList.add("field-name");
    label.textContent = labelText;

    input.classList.add("field-input");
    input.name = labelText.toLowerCase(); // e.g. "title", "author"

    div.appendChild(label);
    div.appendChild(input);

    return { element: div, input };
}

function createModalCheckbox(labelText) {
    const div = document.createElement("div");
    const label = document.createElement("span");
    const checkbox = document.createElement("input");

    div.classList.add("field-wrapper");
    label.classList.add("field-name");
    label.textContent = labelText;

    checkbox.type = "checkbox";
    checkbox.checked = false;
    checkbox.style.alignSelf = "flex-start"
    checkbox.name = labelText.toLowerCase(); // e.g. "read"

    div.appendChild(label);
    div.appendChild(checkbox);

    return { element: div, checkbox };
}
export function createModal(addBookCallback) {
    const modal = document.createElement("div");
    modal.className = "modal";

    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    modal.addEventListener("click", (e) => {
        if (!modalContent.contains(e.target)) document.body.removeChild(modal);
    });

    const closeBtn = document.createElement("span");
    closeBtn.className = "close";
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = () => document.body.removeChild(modal);

    const content = document.createElement("p");
    content.textContent = "Enter the book";

    // Create fields
    const titleField = createInputField("Title");
    const authorField = createInputField("Author");
    const pagesField = createInputField("Pages");
    const readCheckbox = createModalCheckbox("Read");

    // Submit button
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Add Book";
    submitBtn.style.alignSelf = "flex-end";
    submitBtn.onclick = () => {
        const book = new Book(
            titleField.input.value.trim(),
            authorField.input.value.trim(),
            Number(pagesField.input.value),
            readCheckbox.checkbox.checked
        );

        addBookCallback(book); // Pass book to external handler
        document.body.removeChild(modal); // Close modal
    };

    modalContent.appendChild(closeBtn);
    modalContent.appendChild(content);
    modalContent.appendChild(titleField.element);
    modalContent.appendChild(authorField.element);
    modalContent.appendChild(pagesField.element);
    modalContent.appendChild(readCheckbox.element);
    modalContent.appendChild(submitBtn);

    modal.appendChild(modalContent);
    return modal;
}


export function newBookButton(){
    const newBookButt = document.createElement("button");
    newBookButt.style.backgroundColor = "yellow";
    newBookButt.textContent = "New Book";
    newBookButt.addEventListener("click", ()=>{
        const modal = createModal((book)=>{
            window.myLibrary.push(book);
            addToTable(book,document.querySelector("table"),window.myLibrary);
        });
        modal.style.display = "block";
        document.body.appendChild(modal);
    });

    return newBookButt;
}