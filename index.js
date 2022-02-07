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
  if (bookTitle.value != '' && bookAuthor.value != '') {
    BookList.push(new book(bookTitle.value, bookAuthor.value));
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

/* Storage local for data */
var datas = ['1', '2', '3'];
localStorage['datas'] = JSON.stringify(datas);

// Retrieve
var stored_datas = JSON.parse(localStorage['datas']);
const formModel = {
  name: 'Karam',
  email: '',
};
const keymData = localStorage.getItem('formDataInput');
if (keymData) {
  const formDataInput = JSON.parse(keymData);
  nameInput.value = formDataInput.name;
  emailInput.value = formDataInput.email;
  messageInput.value = formDataInput.msg;
} else {
  localStorage.setItem('formDataInput', JSON.stringify(formModel));
}

const dataStorage = (key, value) => {
  const formDataInput = JSON.parse(localStorage.getItem('formDataInput'));
  formDataInput[`${key}`] = value;
  localStorage.setItem('formDataInput', JSON.stringify(formDataInput));
};

form.addEventListener('input', (e) => {
  dataStorage(e.target.id, e.target.value);
  switch (e.target.id) {
    case 'name':
      validInput();
      break;
    case 'email':
      validInput();
      break;
    case 'msg':
      validInput();
      break;
    default:
      validInput();
  }
});
