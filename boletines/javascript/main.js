/*
let links = document.querySelectorAll("a")

links.forEach(function(link){
    console.log(link)

})
*/

let celdas = document.querySelectorAll("td");


celdas.forEach(function(td){
    td.addEventListener("click", function(){
        console.log(this)
    })


});

let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener("click", function(){
        console.log("Hola")
    } )
})

let content = document.querySelector(".content");

content.classList.remove("fadeInDown");
content.classList.remove("animated");
content.classList.add("fadeOutUp");
content.classList.add("animated");
/*location.href = "/";*/
setTimeout(function(){
   /* window.history.go(-1);*/
  /* window.location.href = "./boletines";*/
}, 1000);