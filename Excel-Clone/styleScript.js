// let colorSpans = document.querySelectorAll(".colors span");
// let fontColorBtn = colorSpans[0];
// let backgroundColorBtn = colorSpans[1];

// let alignmentSpans = document.querySelectorAll(".alignment span");

// let leftAlignBtn = alignmentSpans[0]
// let centerAlignBtn = alignmentSpans[1]
// let rightAlignBtn = alignmentSpans[2]


// leftAlignBtn.addEventListener("click",function(){
//     oldCell.style.textAlign = "left"
//     let address = oldCell.getAttribute("data-address");
//     dataObj[address].textAlign = "left";
// })

// rightAlignBtn.addEventListener("click",function(){
//     oldCell.style.textAlign = "right"
//     let address = oldCell.getAttribute("data-address");
//     dataObj[address].textAlign = "right";
// })


// centerAlignBtn.addEventListener("click",function(){
//     oldCell.style.textAlign = "center"
//     let address = oldCell.getAttribute("data-address");
//     dataObj[address].textAlign = "center";
// })



// fontColorBtn.addEventListener("click", function () {
//   let colorPicker = document.createElement("input");
//   colorPicker.type = "color";

//   colorPicker.addEventListener("change", function (e) {
//     oldCell.style.color = e.currentTarget.value;
//     let address = oldCell.getAttribute("data-address");
//     dataObj[address].fontColor = e.currentTarget.value;
//   });

//   colorPicker.click();
// });

// backgroundColorBtn.addEventListener("click", function () {
//   let colorPicker = document.createElement("input");
//   colorPicker.type = "color";

//   colorPicker.addEventListener("change", function (e) {
//     oldCell.style.backgroundColor = e.currentTarget.value;
//     let address = oldCell.getAttribute("data-address");
//     dataObj[address].backgroundColor = e.currentTarget.value;

//     console.log(dataObj[address]);
//   });

//   colorPicker.click();
// });

let menuBarPtags = document.querySelectorAll(".menu-bar p");

let fileOptions = menuBarPtags[0];

// let dataObj = {};

fileOptions.addEventListener("click", function (e) {
  if (e.currentTarget.classList.length == 0) {
    e.currentTarget.innerHTML = `File
    <span>
     <span>Clear</span>
     <span>Open</span>
     <span>Save</span>
    </span>`;

    let allFileOptions = e.currentTarget.querySelectorAll("span>span");

    //clear
    allFileOptions[0].addEventListener("click", function () {
      let allCells = document.querySelectorAll(".cell");
      for (let i = 0; i < allCells.length; i++) {
        allCells[i].innerText = "";
        let cellAdd = allCells[i].getAttribute("data-address");
        console.log(cellAdd);
        dataObj[cellAdd] = {
          value: "",
          formula: "",
          upstream: [],
          downstream: [],
          fontSize: 10,
          fontFamily: "Arial",
          fontWeight: "normal",
          color: "black",
          backgroundColor: "white",
          underline: "none",
          italics: "normal",
          textAlign: "left",
        };
      }
    });

    //open
    allFileOptions[1].addEventListener("click", function () {
      //1 - Fetch dataObj from localstorage
      //2 - replace current dataObj with fetched obj
      dataObj = JSON.parse(localStorage.getItem("sheet"));

      //3 - Populate UI with this data

      for (let j = 1; j <= 100; j++) {
        for (let i = 0; i < 26; i++) {
          let address = String.fromCharCode(i + 65) + j;
          let cellObj = dataObj[address];
          let cellOnUi = document.querySelector(`[data-address=${address}]`);
          cellOnUi.innerText = cellObj.value;
          cellOnUi.style.backgroundColor = cellObj.backgroundColor;
          //same kaam css styling kelie kr sakta hu?
        }
      }
    });

    //save
    allFileOptions[2].addEventListener("click", function () {
      localStorage.setItem("sheet", JSON.stringify(dataObj));
    });
  } else {
    e.currentTarget.innerHTML = `File`;
  }
});