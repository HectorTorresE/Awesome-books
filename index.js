class book {
  constructor(Title, Author) {
    this.Title = Title;
    this.Author = Author;
  }
}

let BookList = [];

const bookTitle = document.getElementById('bookTilte');
const bookAuthor = document.getElementById('bookAuthor');
const btnAdd = document.getElementById('Add');


function AddBook() {
  if (bookTitle.value != "" && bookAuthor.value != "") {
    BookList.push(new book (bookTitle.value,bookAuthor.value));
    
  }
}


document.addEventListener('DOMContentLoaded', () => {
  btnAdd.addEventListener('click', AddBook);

});

function displayBooks() {
  if (BookList.length >= 1) {
    BookList.map((el) => {
      const BookSec = document.getElementById('bookSec');
      const section = document.createElement('section');
  
      const rowTitle = document.createElement('div');
      rowTitle.classList.add('row');
      rowTitle.classList.add('m-2');
  
      const colTitle = document.createElement('div');
      colTitle.classList.add('col-4');
      colTitle.classList.add('m-2');
  
      const labelTitle = document.createElement('label');
      labelTitle.classList.add('titleBook');
      labelTitle.textContent = el.Title;
  
      colTitle.appendChild(labelTitle);
      rowTitle.appendChild(colTitle);
      section.appendChild(rowTitle);
  
      const rowAuthor = document.createElement('div');
      rowAuthor.classList.add('row');
      rowAuthor.classList.add('m-2');
  
      const colAuthor = document.createElement('div');
      colAuthor.classList.add('col-4');
      colAuthor.classList.add('m-2');
  
      const labelAuthor = document.createElement('label');
      labelAuthor.classList.add('titleBook');
      labelAuthor.textContent = el.Author;
  
      colAuthor.appendChild(labelAuthor);
      rowAuthor.appendChild(colAuthor);
      section.appendChild(rowAuthor);
  
      const rowbtn = document.createElement('div');
      rowbtn.classList.add('row');
      rowbtn.classList.add('m-2');
  
      const colbtn = document.createElement('div');
      colbtn.classList.add('col-4');
  
      const removeBtn = document.createElement('input');
      removeBtn.type = 'submit';
      removeBtn.id = 'Remove';
      removeBtn.value = 'Remove';
  
      colbtn.appendChild(removeBtn);
      rowbtn.appendChild(colbtn);
      section.appendChild(rowbtn);
  
      const hr = document.createElement('hr');
      section.appendChild(hr);
      BookSec.appendChild(section);
  
      return null;
    });
  }
}
