const inputBox1 = document.getElementById("addmenu");
const Food = document.getElementById("food");
const inputBox2 = document.getElementById("addprice");
const price = document.getElementById("price");

function AddTask(){
    if(inputBox1.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox1.value;
        Food.appendChild(li);
    }
    if(inputBox2.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox2.value;
        price.appendChild(li);
    }
    inputBox1.value = "";
    inputBox2.value = "";
}