let filter = document.querySelectorAll(".filter div")
let grid = document.querySelector(".grid")

let realcolors={
    pink:"#d595aa",
    blue:"#5ecdde",
    green:"#91e6c7",
    black:"black"
}
for( let i =0; i<filter.length; i++)
{  
   filter[i].addEventListener("click",function(e){
       let color = filter[i].classList[0].split("-")[0];
       grid.style.backgroundColor= realcolors[color];
   })
}