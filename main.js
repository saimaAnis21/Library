let myLibrary = [];

function Book(title,author,pgs) {
  this.title= title;
  this.author= author;
  this.pgs=pgs;
  this.read=false;
}

function displayBooks(){
    let txt="<table><tr><th>Title</th>";
    txt= txt+"<th>Author</th><th>Pages</th><th>Read?</th><th>Delete?</th></tr>";
        for(var i=0; i< myLibrary.length; i++){
          txt=txt+"<tr><td>"+myLibrary[i].title+"</td>";
          
          txt=txt+"<td>"+myLibrary[i].author+"</td>";
          
          txt=txt+"<td>"+myLibrary[i].pgs+"</td>";
          txt=txt+"<td><button onclick='changeRead("+i+")'>"+read(myLibrary[i].read)+"</button></td>";
          txt=txt+"<td><button onclick='deleteBook("+i+")'>delete</button></td></tr>"
          
        }
        txt=txt+"</table>";
        document.getElementById("distbl").innerHTML= txt;
    }