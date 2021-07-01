let body = document.querySelector("body");
body.spellcheck = false;
let row_tags = document.querySelector(".row-tags");
let menu_content = document.querySelectorAll(".menu-bar p");
let grid = document.querySelector(".grid");
let formulaSelectCell = document.querySelector("#select-cell");
let forumlaInput = document.querySelector("#complete-formula");
let oldCell;

let dataObj ={};
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


for(let i = 1; i<=100; i++){

    let div = document.createElement("div");
    div.classList.add("row-numbers");
    div.innerText = i;
    row_tags.append(div);
}

for( let i =1; i<=100; i++){
    let row = document.createElement("div");
    row.classList.add("row");

    for( let j =0; j<26; j++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        let address = String.fromCharCode(65+j) + i
        cell.contentEditable = true;
        cell.setAttribute("data-address",address);
        dataObj[address]={
          value :"",
          formula:"",
          upstream:[],
          downstream:[]
        };
        cell.addEventListener("click", function (e) {
          //check kro koi old cell hai kya pehli se selected
          if (oldCell) {
            // agr han to use deselect kro class remove krke
            oldCell.classList.remove("grid-selected-cell");
          }
          //jis cell pr click kra use select kro class add krke
          e.currentTarget.classList.add("grid-selected-cell");
    
          let cellAddress = e.currentTarget.getAttribute("data-address");
    
          formulaSelectCell.value = cellAddress;
    
          //and ab jo naya cell select hogya use save krdo old cell wali variable taki next time agr click ho kisi nye cell pr to ise deselect kr pai
          oldCell = e.currentTarget;
        });
        
       cell.addEventListener("input",function(e){
         
         let address = e.currentTarget.getAttribute("data-address");

        //Step-1 udate the value from input cell
         dataObj[address].value = Number(e.currentTarget.innerText);

        //Step-2 clear  the formula if exist
        dataObj[address].formula ="";
        
        //Step-3 upstream ke array mai traverse karke har element ko bolo ki apne downstream se mujhe karo remove aur meri upstream kardo empty

        let currCellUpstream = dataObj[address].upstream;
        for( let i =0; i<currCellUpstream.length; i++){
            removeUpstream(address, currCellUpstream[i]);
        }
        dataObj[address].upstream = [];

        //Step-4 Now is cell ke downstream ke elemnts ko update karna hai 

        let currCellDownstream = dataObj[address].downstream;
        for( let i =0; i<currCellDownstream.length; i++){
          updateDownStream(currCellDownstream[i]);
        }

       })



        cell.contentEditable = true;
        row.append(cell);
    }
    grid.append( row);
}
// Day 2 on sunday chunnu bday
forumlaInput.addEventListener("change", function (e) {
  let formula = e.currentTarget.value; //"2 * A1"

  let selectedCellAddress = oldCell.getAttribute("data-address");

  dataObj[selectedCellAddress].formula = formula;

  let formulaArr = formula.split(" "); //["2","*","A1"]

  let elementsArray = [];

  for (let i = 0; i < formulaArr.length; i++) {
    if (
      formulaArr[i] != "+" &&
      formulaArr[i] != "-" &&
      formulaArr[i] != "*" &&
      formulaArr[i] != "/" &&
      isNaN(Number(formulaArr[i]))
    ) {
      elementsArray.push(formulaArr[i]);
    }
  }

  //BEFORE SETTING NEW UPSTREAM
  //CLEAR OLD UPSTREAM

  let oldUpstream = dataObj[selectedCellAddress].upstream;



  for (let k = 0; k < oldUpstream.length; k++) {
    removeFromUpstream(selectedCellAddress, oldUpstream[i]);
  }

  dataObj[selectedCellAddress].upstream = elementsArray;

  for (let j = 0; j < elementsArray.length; j++) {
    addToDownstream(selectedCellAddress, elementsArray[j]);
  }

  let valObj = {};

  for (let i = 0; i < elementsArray.length; i++) {
    let formulaDependency = elementsArray[i];

    valObj[formulaDependency] = dataObj[formulaDependency].value;
  }

  for (let j = 0; j < formulaArr.length; j++) {
    if (valObj[formulaArr[j]] != undefined) {
      formulaArr[j] = valObj[formulaArr[j]];
    }
  }

  formula = formulaArr.join(" ");
  let newValue = eval(formula);

  dataObj[selectedCellAddress].value = newValue;

  let selectedCellDownstream = dataObj[selectedCellAddress].downstream;

  for (let i = 0; i < selectedCellDownstream.length; i++) {
    updateDownstreamElements(selectedCellDownstream[i]);
  }

  oldCell.innerText = newValue
  forumlaInput.value = ""

});

function addToDownstream(tobeAdded, inWhichWeAreAdding) {
  //get downstream of the cell in which we have to add
  let reqDownstream = dataObj[inWhichWeAreAdding].downstream;

  reqDownstream.push(tobeAdded);
}

function removeUpstream(dependent, onWhichItisdepending){
  let newDownstream =[];
  
   let downstreamofOnwhichItisDepending = dataObj[onWhichItisdepending].downstream;
  for( let i =0; i<downstreamofOnwhichItisDepending.length; i++){
    if(downstreamofOnwhichItisDepending[i] != dependent) newDownstream.push(downstreamofOnwhichItisDepending[i]);
  }

  dataObj[onWhichItisdepending].downstream = newDownstream;
}
// day 2 chunnu bday end

function updateDownStream(elementAddress){
 //1- jis element ko update kr rhe hai unki upstream elements ki current value leao
  //unki upstream ke elements ka address use krke dataObj se unki value lao
  //unhe as key value pair store krdo valObj naam ke obj me
  let valObj = {};

  let currCellUpstream = dataObj[elementAddress].upstream;

  for (let i = 0; i < currCellUpstream.length; i++) {
    let upstreamCellAddress = currCellUpstream[i];
    let upstreaCellValue = dataObj[upstreamCellAddress].value;

    valObj[upstreamCellAddress] = upstreaCellValue;
  }

  //2- jis element ko update kr rhe hai uska formula leao
  let currFormula = dataObj[elementAddress].formula;
  //formula ko space ke basis pr split maro
  let forumlaArr = currFormula.split(" ");
  //split marne ke baad jo array mili uspr loop ara and formula me jo variable h(cells) unko unki value se replace krdo using valObj
  for (let j = 0; j < forumlaArr.length; j++) {
    if (valObj[forumlaArr[j]]) {
      forumlaArr[j] = valObj[forumlaArr[j]];
    }
  }

  //3- Create krlo wapis formula from the array by joining it
  currFormula = forumlaArr.join(" ");

  //4- evaluate the new value using eval function
  let newValue = eval(currFormula);

  //update the cell(jispr function call hua) in dataObj
  dataObj[elementAddress].value = newValue;

  //5- Ui pr update krdo new value
  let cellOnUI = document.querySelector(`[data-address=${elementAddress}]`);
  cellOnUI.innerText = newValue;

  //6- Downstream leke ao jis element ko update kra just abhi kuki uspr bhi kuch element depend kr sakte hai
  //unko bhi update krna padega
  let currCellDownstream = dataObj[elementAddress].downstream;

  //check kro ki downstream me elements hai kya agr han to un sab pr yehi function call krdo jise wo bhi update hojai with new value
  if (currCellDownstream.length > 0) {
    for (let k = 0; k < currCellDownstream.length; k++) {
      updateDownstreamElements(currCellDownstream[k]);
    }
  }
}
// console.log(dataObj);