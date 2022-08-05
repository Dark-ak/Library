const adding = document.getElementById("add");

const modal = document.getElementsByClassName("modal");

const content = document.getElementsByClassName("modal-content");

const error = document.getElementsByClassName("error");

const books = document.getElementsByClassName("books")

const container = document.getElementsByClassName("container")



modal[0].addEventListener("click",function(){
  modal[0].style.display = "none";
})

content[0].addEventListener("click", function(e){
  e.stopPropagation();
})

function input() {
  modal[0].style.display = "block";
}

function check(){
  const title = document.getElementsByClassName("title")[0].value;
  const author = document.getElementsByClassName("author")[0].value;
  const pages = document.getElementsByClassName("pages")[0].value;

  if((title == "") || (author == "") || (pages == "")){
    error[0].style.display = "block";
  }

  else{
    remove();
    modal[0].style.display = "none";
  }
}

function remove(){
  for(var i = books.length; i<=books.length;i++){
    books[i-1].innerHTML="";
  }
  show()
}

function show(){
  let title = document.getElementsByClassName("title")[0].value;
  let author = document.getElementsByClassName("author")[0].value;
  let pages = document.getElementsByClassName("pages")[0].value;
  let read = document.getElementById("read").checked;

  for(var i=books.length;i<=books.length;i++){
    const t_ele = document.createElement("p");
    t_ele.innerHTML = "Title: "+title;
    books[i-1].appendChild(t_ele);

    const a_ele = document.createElement("p");
    a_ele.innerHTML = "Author: "+author;
    books[i-1].appendChild(a_ele);

    const p_ele = document.createElement("p")
    p_ele.innerHTML = "Pages: "+pages;
    books[i-1].appendChild(p_ele);

    const r_ele = document.createElement("button");
    r_ele.textContent = "Read";
    r_ele.style.color = "white"
    color(read,r_ele);
    books[i-1].appendChild(r_ele);

    const del = document.createElement("button");
    del.textContent = "Delete";
    books[i-1].appendChild(del);
    del.addEventListener("click", () =>{
      del.parentElement.remove();
    })

    console.log(read);
  }
  next()
}


function next(){
  const div = document.createElement("div");
  div.className = "books"

  const img = document.createElement("img")
  img.src = "images/add.png";
  img.id = "add";
  img.addEventListener("click", function(){
    input();
  })

  const p = document.createElement("p");
  p.innerHTML = "Add Book";

  div.appendChild(img);
  div.appendChild(p);
  container[0].appendChild(div);
  clear();
}

function clear(){
  document.getElementById("formid").reset();
}


function color(read,r_ele){

  if(read == true){
    r_ele.style.backgroundColor = "green";
  }
  else{
    r_ele.style.color = "black";
    r_ele.textContent = "Not Read"
  }
  r_ele.addEventListener("click",() =>{
    if(read == true){
      read = false;
      r_ele.style.backgroundColor = "white";
      r_ele.style.color = "black";
      r_ele.textContent = "Not Read"
    }

    else if(read == false){
      read = true;
      r_ele.style.backgroundColor = "green";
      r_ele.style.color = "white";
      r_ele.textContent = "Read"
    }
  })
}
