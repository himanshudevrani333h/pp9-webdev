let input = document.querySelector("#inp");
let ul = document.querySelector("#list");

input.addEventListener("keypress",function(e){
if(e.code == "Enter")
{
    let inpdata = e.currentTarget.value;
    inpdata=inpdata.trim();
    if(inpdata == "") return;
    let li = document.createElement("li");
    li.innerText = inpdata;
    ul.append(li);
    li.addEventListener("dblclick",function(e){
        e.currentTarget.remove();
    })

    e.currentTarget.value ="";
}
});