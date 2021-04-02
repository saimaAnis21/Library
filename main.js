let myLibrary = [];

function Book(title,author,pgs) {
  this.title= title;
  this.author= author;
  this.pgs=pgs;
  this.read=false;
}

function addBookToLibrary() {
    const t= document.querySelector("#title").value
    const a= document.querySelector("#author").value
    const p = document.querySelector("#pgs").value
   const addNewBook = new Book(t,a,p);
    myLibrary.push(addNewBook);
    displayBooks();
 }
 
 function deleteBook(index){
 myLibrary.splice(index,1);
 displayBooks();
 }
 
 function read(state){
   if (state){
     return "Read"
   }
   else{
     return "Not Read"
   }
 }
 
 function changeRead(i){
   if (myLibrary[i].read === true){
      myLibrary[i].read = false;
   }
   else{
      myLibrary[i].read= true;
   }
   displayBooks()
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

    function changedisplay(){
        document.getElementById("frm1").style.display="block";
        document.getElementById("btn").style.display="block";
        document.getElementById("frmbtn").style.display="none";
       }