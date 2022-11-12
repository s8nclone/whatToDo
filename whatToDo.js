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