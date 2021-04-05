/* eslint-disable */
class Book {
  constructor(title, author, pgs) {
    this.read = false;
    this.title = title;
    this.author = author;
    this.pgs = pgs;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get pgs() {
    return this._pgs;
  }

  get read() {
    return this._read;
  }

  set read(val) {
    this._read = val;
  }

  set title(val) {
    this._title = val;
  }

  set author(val) {
    this._author = val;
  }

  set pgs(val) {
    this._pgs = val;
  }
}


class Library {
    books = [];


    read(state) {
      if (state === true) {
        return 'Read';
      }
      return 'Not Read';
    }

    displayBooks() {
      let txt = '<table><tr><th>Title</th>';
      txt = `${txt}<th>Author</th><th>Pages</th><th>Read?</th><th>Delete?</th></tr>`;
      for (let i = 0; i < this.books.length; i += 1) {
        txt = `${txt}<tr><td>${this.books[i].title}</td>`;

        txt = `${txt}<td>${this.books[i].author}</td>`;

        txt = `${txt}<td>${this.books[i].pgs}</td>`;
        txt = `${txt}<td><button onclick='myLibrary.changeRead(${i})'>${this.read(this.books[i].read)}</button></td>`;
        txt = `${txt}<td><button onclick='myLibrary.deleteBook(${i})'>delete</button></td></tr>`;
      }
      txt += '</table>';
      document.getElementById('distbl').innerHTML = txt;
    }

    addBookToLibrary() {
      const t = document.querySelector('#title').value;
      const a = document.querySelector('#author').value;
      const p = document.querySelector('#pgs').value;
      const newBook = new Book(t, a, p);
      this.books.push(newBook);
      this.displayBooks();
    }


    deleteBook(index) {
      this.books.splice(index, 1);
      this.displayBooks();
    }

    changeRead(i) {
      if (this.books[i].read === true) {
        this.books[i].read = false;
      } else {
        this.books[i].read = true;
      }

      this.displayBooks();
    }
}

function changedisplay() {
  document.getElementById('frm1').style.display = 'block';
  document.getElementById('btn').style.display = 'block';
  document.getElementById('frmbtn').style.display = 'none';
}

const myLibrary = new Library();
/* eslint-enable */
