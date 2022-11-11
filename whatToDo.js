<<<<<<< HEAD
var name =document.getElementById("userName");
var todo =document.getElementById("todo");
var button =document.getElementById("submit");
var addList =document.getElementById("addlist");
var ul =document.querySelector("ul");

// function to add items to list
function addToList() {
    return addList.value.length;
}

function createListItems() {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(addList.value));
        ul.appendChild(li);
        ul.appendChild(li).addEventListener("click", toggleList);
        addList.value= "";
}

//create click function
function addItemsWhenClick(){
    if (addToList()  > 0) {
        createListItems();
    }
}

//create keypress function
function addItemsWhenKeyPress(event){
    if (addToList()  > 0 && event.key === "Enter") {
        createListItems();
}}


//function to blur item upon completion
function toggleList (){
    this.classList.toggle("done");
}

button.addEventListener("click", addItemsWhenClick);

addList.addEventListener("keypress", addItemsWhenKeyPress);



// //creating dropdown button for events
// function addDropdown (){
//     var dropDown =document.createElement("dropdown");
//     dropDown.setAttribute("class", "drpdwn");
//     dropDown.appendChild(document.createTextNode("events"));
// }

// //add events in dropdown 
// // function additionalEvents (){
// //     let li1 =Document.createElement("li");
// //     let ul1 =Document.createElement("ul");
// //     ul1.appendChild(li1);
// //     li1.appendChild(Document.createTextNode("Write html")); 
// //     li1.appendChild(Document.createTextNode("Write CSS"));
// //     li1.appendChild(Document.createTextNode("Write Javascript"));
// // }

// //create add item to list item
// function addListItems (){
//     let li =Document.createElement("li")
//     li.appendChild(Document.createTextNode(addlist.value));
//     ul.appendChild(li).addEventListener("click", toggleList);
//     ul>li.appendChild(dropdown).addEventListener("click", addDropdown);
//     input.value="";
// }


// submit.addEventListener("click", whenClick);
=======
const name=document.getElementById(userName);
const todo=document.getElementById(todo);
const submit =document.getElementById(submit);
const addlist=document.getElementById(addlist);
const li=document.querySelector(li);

//function to add items to list
function addToList () {
    return addlist.value.length;
}

//function to blur item upon completion
function toggleList (){
    this.classList.toggle("done");
}

//creating dropdown button for events
function addDropdown (){
    const dropdown=document.createElement(dropdown);
    dropdown.setAttribute("class", "drpdwn");
    dropdown.appendChild(document.createTextNode("events"));
}

//add events in dropdown 
function additionalEvents (){
    let li1=document.createElement("li");
    let ul1=document.createElement("ul");
    ul1.appendChild(li1);
    li1.appendChild(document.createTextNode("Write html")); 
    li1.appendChild(document.createTextNode("Write CSS"));
    li1.appendChild(document.createTextNode("Write Javascript"));
}

//create add item to list item
function addListItems (){
    let li=document.createElement("li")
    li.appendChild(document.createTextNode(addlist.value));
    ul.appendChild(li).addEventListener("click", toggleList);
    ul>li.appendChild(dropdown).addEventListener("click", addDropdown);
    input.value="";
}
//create click function
function whenClick(){
    if (addToList () > 0){
        addListItems ();
    }
}

submit.addEventListener("click", whenClick);
>>>>>>> fcf4670f46f29c8a850c0c0b6c4afa4d8df9a6bc
