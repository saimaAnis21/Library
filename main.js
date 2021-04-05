
const Book = (title, author, pgs) => {
  const read = false;
  return {
    title, author, pgs, read,
  };
};

/* eslint-disable */
const myLibrary = (() => {
  const library = [];

  const read = (state) => {
    if (state) {
      return 'Read';
    }
    return 'Not Read';
  };

  const displayBooks = () => {
    let txt = '<table><tr><th>Title</th>';
    txt = `${txt}<th>Author</th><th>Pages</th><th>Read?</th><th>Delete?</th></tr>`;
    for (let i = 0; i < library.length; i += 1) {
      txt = `${txt}<tr><td>${library[i].title}</td>`;

      txt = `${txt}<td>${library[i].author}</td>`;

      txt = `${txt}<td>${library[i].pgs}</td>`;
      txt = `${txt}<td><button onclick='myLibrary.changeRead(${i})'>${read(library[i].read)}</button></td>`;
      txt = `${txt}<td><button onclick='myLibrary.deleteBook(${i})'>delete</button></td></tr>`;
    }
    txt += '</table>';
    document.getElementById('distbl').innerHTML = txt;
  };

  const addBookToLibrary = () => {
    const t = document.querySelector('#title').value;
    const a = document.querySelector('#author').value;
    const p = document.querySelector('#pgs').value;
    const newBook = Book(t, a, p);
    library.push(newBook);
    displayBooks();
  };


  const deleteBook = (index) => {
    library.splice(index, 1);
    displayBooks();
  };

  const changeRead = (i) => {
    if (library[i].read === true) {
      library[i].read = false;
    } else {
      library[i].read = true;
    }

    displayBooks();
  };


  return {
    addBookToLibrary, displayBooks, changeRead, deleteBook,
  };
})();

function changedisplay() {
  document.getElementById('frm1').style.display = 'block';
  document.getElementById('btn').style.display = 'block';
  document.getElementById('frmbtn').style.display = 'none';
}
/* eslint-enable */
