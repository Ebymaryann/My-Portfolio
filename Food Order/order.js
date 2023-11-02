const inputBox = document.getElementById("input-box");
const myList = document.getElementById("my-list");

function addTask(){
    if(inputBox.value === ''){
        alert("input your order")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        myList.appendChild(li);
    }
    inputBox.value = '';
    
}