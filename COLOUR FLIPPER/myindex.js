let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let bgColor = document.querySelector(".body");
let myClass = document.querySelector(".hex-color");
let btn = document.querySelector("#butt");



btn.addEventListener("click", function (){
    let hexColor ="#"
    for(i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber ()]
    }
    myClass.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})


let getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}