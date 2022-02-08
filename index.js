class BookList {
  constructor() {
    this.Books = [];
  }

  AddBook(Title, Author) {
    if (Title !== '' && Author !== '') {
      const Book  = {
        Title: Title,
        Author: Author
      };
      this.Books.push(Book);
    }
  }

  RemoveBook(index) {
    if (index > -1) {
      this.Books.splice(index, 1);
    }
  }
}

const bList = new BookList();
const bookTitle = document.getElementById('bookTilte');
const bookAuthor = document.getElementById('bookAuthor');
const btnAdd = document.getElementById('Add');

function Add() {
  if (bookTitle.value !== '' && bookAuthor.value !== '') {
    bList.AddBook(bookTitle.value, bookAuthor.value);
    localStorage.setItem('BookList', JSON.stringify(bList.Books));
    window.location.reload();
  }
}

function Remove() {
  if (this.id > -1) {
    bList.RemoveBook(this.id);
    localStorage.setItem('BookList', JSON.stringify(bList.Books));
    window.location.reload();
  }
}

function displayBooks() {
  if (bList.Books.length >= 1) {
    bList.Books.map((el, i) => {
      const BookSec = document.getElementById('bookSec');
      if (i === 0) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('borderT');
        const col = document.createElement('div');
        col.classList.add('col-6');
        col.classList.add('text-left');
        const h5 = document.createElement('h5');
        h5.classList.add('m-2');
        h5.textContent = `"${el.Title}" by ${el.Author}`;
        col.appendChild(h5);
        const col2 = document.createElement('div');
        col2.classList.add('col-6');
        col2.classList.add('text-end');
        const input = document.createElement('input');
        input.classList.add('m-2');
        input.type = 'submit';
        input.value = 'Remove';
        input.id = i;
        input.addEventListener('click', Remove);
        col2.appendChild(input);
        row.appendChild(col);
        row.appendChild(col2);
        BookSec.appendChild(row);

        return null;
      }
      if (i === (bList.Books.length - 1) && i % 2 !== 0) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('borderBW');
        const col = document.createElement('div');
        col.classList.add('col-6');
        col.classList.add('text-left');
        const h5 = document.createElement('h5');
        h5.classList.add('m-2');
        h5.textContent = `"${el.Title}" by ${el.Author}`;
        col.appendChild(h5);
        const col2 = document.createElement('div');
        col2.classList.add('col-6');
        col2.classList.add('text-end');
        const input = document.createElement('input');
        input.classList.add('m-2');
        input.type = 'submit';
        input.value = 'Remove';
        input.id = i;
        input.addEventListener('click', Remove);
        col2.appendChild(input);
        row.appendChild(col);
        row.appendChild(col2);
        BookSec.appendChild(row);
        return null;
      }
      if (i === (bList.Books.length - 1) && i % 2 === 0) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('borderB');
        const col = document.createElement('div');
        col.classList.add('col-6');
        col.classList.add('text-left');
        const h5 = document.createElement('h5');
        h5.classList.add('m-2');
        h5.textContent = `"${el.Title}" by ${el.Author}`;
        col.appendChild(h5);
        const col2 = document.createElement('div');
        col2.classList.add('col-6');
        col2.classList.add('text-end');
        const input = document.createElement('input');
        input.classList.add('m-2');
        input.value = 'Remove';
        input.type = 'submit';
        input.id = i;
        input.addEventListener('click', Remove);
        col2.appendChild(input);
        row.appendChild(col);
        row.appendChild(col2);
        BookSec.appendChild(row);
        return null;
      }
      if (i % 2 !== 0) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('borderMW');
        const col = document.createElement('div');
        col.classList.add('col-6');
        col.classList.add('text-left');
        const h5 = document.createElement('h5');
        h5.classList.add('m-2');
        h5.textContent = `"${el.Title}" by ${el.Author}`;
        col.appendChild(h5);
        const col2 = document.createElement('div');
        col2.classList.add('col-6');
        col2.classList.add('text-end');
        const input = document.createElement('input');
        input.classList.add('m-2');
        input.type = 'submit';
        input.value = 'Remove';
        input.id = i;
        input.addEventListener('click', Remove);
        col2.appendChild(input);
        row.appendChild(col);
        row.appendChild(col2);
        BookSec.appendChild(row);
      } else {
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('borderM');
        const col = document.createElement('div');
        col.classList.add('col-6');
        col.classList.add('text-left');
        const h5 = document.createElement('h5');
        h5.classList.add('m-2');
        h5.textContent = `"${el.Title}" by ${el.Author}`;
        col.appendChild(h5);
        const col2 = document.createElement('div');
        col2.classList.add('col-6');
        col2.classList.add('text-end');
        const input = document.createElement('input');
        input.classList.add('m-2');
        input.value = 'Remove';
        input.type = 'submit';
        input.id = i;
        input.addEventListener('click', Remove);
        col2.appendChild(input);
        row.appendChild(col);
        row.appendChild(col2);
        BookSec.appendChild(row);
        return null;
      }

      return null;
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  btnAdd.addEventListener('click', Add);
  if (localStorage.getItem('BookList') !== null) {
    bList.Books = JSON.parse(localStorage.getItem('BookList'));
    displayBooks();
  }
});