let body = document.querySelector("body");
body.spellcheck = false;
let row_tags = document.querySelector(".row-tags");
let menu_content = document.querySelectorAll(".menu-bar p");
let grid = document.querySelector(".grid");
let formulaSelectCell = document.querySelector("#select-cell");
let oldCell;

for (let i = 0; i < menu_content.length; i++) {
  menu_content[i].addEventListener("click", function (e) {
    if (e.currentTarget.classList.contains("selected-menu")) {
      e.currentTarget.classList.remove("selected-menu");
    } else {
      for (let j = 0; j < menu_content.length; j++) {
        menu_content[j].classList.remove("selected-menu");
      }

      e.currentTarget.classList.add("selected-menu");
    }
  });
}

let colums_tags = document.querySelector(".column-tags");

for (let i = 0; i < 26; i++) {
  let div = document.createElement("div");
  div.classList.add("column-tag");
  div.innerText = String.fromCharCode(65 + i);
  colums_tags.append(div);
}

for (let i = 1; i <= 100; i++) {
  let div = document.createElement("div");
  div.classList.add("row-numbers");
  div.innerText = i;
  row_tags.append(div);
}

for (let i = 1; i <= 100; i++) {
  let row = document.createElement("div");
  row.classList.add("row");

  for (let j = 0; j < 26; j++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.contentEditable = true;
    cell.setAttribute("data-address", String.fromCharCode(65 + j) + i);

    cell.contentEditable = true;
    row.append(cell);
  }
  grid.append(row);
}



  let len = grid.childNodes.length;
  let child_grid = grid.childNodes;
  for( let i = 7; i<len; i++){
   child_grid[i].addEventListener("click",function(e){
    if (oldCell) {
    
      oldCell.classList.remove("grid-selected-cell");
    }

    e.currentTarget.childNodes.classList.add("grid-selected-cell");

    let cellAddress = e.currentTarget.getAttribute("data-address");

    formulaSelectCell.value = cellAddress;

    oldCell = e.currentTarget;
   })

  }
  
