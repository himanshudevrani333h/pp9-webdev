let colorSpans = document.querySelectorAll(".colors div");
let fontColorBtn = colorSpans[0];
let backgroundColorBtn = colorSpans[1];

let alignmentSpans = document.querySelectorAll(".alignment span");

let leftAlignBtn = alignmentSpans[0];
let centerAlignBtn = alignmentSpans[1];
let rightAlignBtn = alignmentSpans[2];

let buiSpans = document.querySelectorAll(".bui span");

let boldbtn = buiSpans[0];
let italicbtn = buiSpans[1];
let underline = buiSpans[2];

let fontstyle = document.querySelector("#cell-font-family");
console.log(fontstyle.value);
fontstyle.addEventListener("change", (e) => {
  console.log(e.currentTarget.value);
  oldCell.style.fontFamily = e.currentTarget.value;
});

let fontsize = document.querySelector("#cell-font-size");
fontsize.addEventListener("change", (e) => {
  console.log(e.currentTarget.value);
  oldCell.style.fontSize = `${e.currentTarget.value}px`;
});

boldbtn.addEventListener("click", function (e) {
  oldCell.style.fontWeight = "bold";
  let address = oldCell.getAttribute("data-address");
  dataObj[address].fontWeight = "bold";
});

italicbtn.addEventListener("click", function (e) {
  oldCell.style.fontStyle = "italic";
  let address = oldCell.getAttribute("data-address");
  dataObj[address].fontStyle = "italic";
});

underline.addEventListener("click", function (e) {
  oldCell.style.textDecoration = "underline";
  let address = oldCell.getAttribute("data-address");
  dataObj[address].textDecoration = "underline";
});

leftAlignBtn.addEventListener("click", function () {
  oldCell.style.textAlign = "left";
  let address = oldCell.getAttribute("data-address");
  dataObj[address].textAlign = "left";
});

rightAlignBtn.addEventListener("click", function () {
  oldCell.style.textAlign = "right";
  let address = oldCell.getAttribute("data-address");
  dataObj[address].textAlign = "right";
});

centerAlignBtn.addEventListener("click", function () {
  oldCell.style.textAlign = "center";
  let address = oldCell.getAttribute("data-address");
  dataObj[address].textAlign = "center";
});

fontColorBtn.addEventListener("click", () => {
  $(".font-text").click();
});

backgroundColorBtn.addEventListener("click", () => {
  $(".font-bg").click();
});

$(".font-text").on("change", (e) => {
  oldCell.style.color = e.currentTarget.value;
  let address = oldCell.getAttribute("data-address");
  dataObj[address].fontColor = e.currentTarget.value;
});

$(".font-bg").on("change", (e) => {
  oldCell.style.backgroundColor = e.currentTarget.value;
  let address = oldCell.getAttribute("data-address");
  dataObj[address].backgroundColor = e.currentTarget.value;
});
