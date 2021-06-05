let filter = document.querySelectorAll(".filter div")
let grid = document.querySelector(".grid")
let addbtn = document.querySelector(".add");
let body = document.querySelector("body");
let del = document.querySelector(".remove")
let modalvisible = false;
let deletestate = false;
// function id(){
// let id = "#"+(Math.random().toString(36).substr(2, 5));
// return id;
// }

let uid = new ShortUniqueId();
let coloridx = ["pink", "blue", "green", "black"];
let realcolors = {
    pink: "#d595aa",
    blue: "#5ecdde",
    green: "#91e6c7",
    black: "black"
}

if (!localStorage.getItem("tasks")) {                  //Initialization of localstorage
    localStorage.setItem("tasks", JSON.stringify([]));
}



del.addEventListener("click", function (e) {
    if (deletestate == false) {
        deletestate = true;
        del.classList.add("remove-active");
    } else {
        deletestate = false;
        del.classList.remove("remove-active");
    }
})

addbtn.addEventListener("click", function (e) {
    if (modalvisible) {
        alert("WARNING! Invalid Attempt");
        return;
    }


    if (del.classList.contains("remove-active")) {
        deletestate = false;
        del.classList.remove("remove-active");
    }
    let modal = document.createElement("div")
    modal.classList.add("modal-container")
    modal.setAttribute("click-first", true)
    modal.innerHTML = `<div  class="writing-area" contenteditable>Enter your task</div>
    <div class="filter-area">
        <div class="modal-filter pink"></div>
        <div class="modal-filter blue"></div>
        <div class="modal-filter green"></div>
        <div class="modal-filter black active"></div>
    </div>`;
    document.addEventListener("keydown", function (e) {        //Escape button functioning
        if (e.key == "Escape") {
            modal.remove();
            modalvisible = false;
        }
    })
    let modalfilters = modal.querySelectorAll(".modal-filter")
    for (let i = 0; i < modalfilters.length; i++) {

        modalfilters[i].addEventListener("click", function (e) {
            for (let j = 0; j < modalfilters.length; j++) {
                modalfilters[j].classList.remove("active");
            }
            e.currentTarget.classList.add("active");
        });
    }

    let wa = modal.querySelector(".writing-area")
    wa.addEventListener("click", function () {
        if (modal.getAttribute("click-first") == "true") {
            wa.innerHTML = "";
            modal.setAttribute("click-first", false);
        }
    })

    wa.addEventListener("keypress", function (e) {
        if (e.key == "Enter") {
            //console.log(e.code);
            let task = e.currentTarget.innerText;
            let color = document.querySelector(".active").classList[1];
            let ticket = document.createElement("div");
            let id = uid();
            ticket.classList.add("ticket")
            ticket.innerHTML = `<div class="ticket-color ${color}"></div>
               <div class="ticket-id">#${id}</div>
               <div class="ticket-box" contenteditable>${task}</div>`;


            savedatainlocalstorage(id, color, task)
            let ticketWA = ticket.querySelector(".ticket-box")
            ticketWA.addEventListener("input", writingareahandler);


            ticket.addEventListener("click", function (e) {
                if (deletestate) {
                    let id = e.currentTarget.querySelector(".ticket-id").innerText.split("#")[1];
                    let prevArry = JSON.parse(localStorage.getItem("tasks"))

                    prevArry = prevArry.filter(function (ele) {
                        return ele.id != id;
                    });

                    localStorage.setItem("tasks", JSON.stringify(prevArry));
                    e.currentTarget.remove();
                }
            });

            let ticketcolor = ticket.querySelector(".ticket-color");
            ticketcolor.addEventListener("click", ticketcolorhandler);
            grid.append(ticket);
            modal.remove();
            modalvisible = false;
        }
    });

    body.append(modal);
    modalvisible = true;
})

function savedatainlocalstorage(id, color, task) {
    let objrequired = { id, color, task };
    let prevSavedArray = JSON.parse(localStorage.getItem("tasks"))
    prevSavedArray.push(objrequired);
    localStorage.setItem("tasks", JSON.stringify(prevSavedArray))
}

function ticketcolorhandler(e) {
    let id = e.currentTarget.parentElement.querySelector(".ticket-id").innerText.split("#")[1];
    let prevArray = JSON.parse(localStorage.getItem("tasks"))
    let indx = -1;
    for (let i = 0; i < prevArray.length; i++) {
        if (prevArray[i].id == id) {
            indx = i;
            break;
        }
    }

    let tcktcurrcolor = e.currentTarget.classList[1];
    let idx = coloridx.indexOf(tcktcurrcolor);
    idx++;
    idx = idx % 4;
    e.currentTarget.classList.remove(tcktcurrcolor);
    e.currentTarget.classList.add(coloridx[idx]);
    let newcolor = coloridx[idx];
    prevArray[indx].color = newcolor;
    localStorage.setItem("tasks", JSON.stringify(prevArray))
}

function writingareahandler(e) {
    let id = e.currentTarget.parentElement.querySelector(".ticket-id").innerText.split("#")[1];
    let prevArry = JSON.parse(localStorage.getItem("tasks"))
    let idx = -1;
    for (let i = 0; i < prevArry.length; i++) {
        if (prevArry[i].id == id) {
            idx = i;
            break;
        }
    }

    // let editedticketText = e.currentTarget.innerText;
    prevArry[idx].task = e.currentTarget.innerText;
    localStorage.setItem("tasks", JSON.stringify(prevArry));
}
for (let i = 0; i < filter.length; i++) {

    filter[i].addEventListener("click", function (e) {


        if (e.currentTarget.parentElement.classList.contains("selected-filter")) {
            e.currentTarget.parentElement.classList.remove("selected-filter")
            loadtickets();
        } else {
            for (let j = 0; j < filter.length; j++) {
                filter[j].parentElement.classList.remove("selected-filter")
            }
            e.currentTarget.parentElement.classList.add("selected-filter")
            let color = filter[i].classList[0].split("-")[0];
            loadtickets(color);
        }
    })
}

function loadtickets(passedColor) {
    let alltckts = document.querySelectorAll(".ticket");
    for (let i = 0; i < alltckts.length; i++) alltckts[i].remove();

    let tickets = JSON.parse(localStorage.getItem("tasks"));

    for (let i = 0; i < tickets.length; i++) {
        let id = tickets[i].id;
        let color = tickets[i].color;
        let task = tickets[i].task;

        if (passedColor) {
            if (passedColor != color) continue;
        }
        let ticket = document.createElement("div");
        ticket.classList.add("ticket")
        ticket.innerHTML = `<div class="ticket-color ${color}"></div>
               <div class="ticket-id">#${id}</div>
               <div class="ticket-box" contenteditable>${task}</div>`;

        let ticketWA = ticket.querySelector(".ticket-box")
        ticketWA.addEventListener("input", writingareahandler);

        let ticketcolor = ticket.querySelector(".ticket-color");
        ticketcolor.addEventListener("click", ticketcolorhandler);

        ticket.addEventListener("click", function (e) {
            if (deletestate) {
                let id = e.currentTarget.querySelector(".ticket-id").innerText.split("#")[1];
                let prevArry = JSON.parse(localStorage.getItem("tasks"))

                prevArry = prevArry.filter(function (ele) {
                    return ele.id != id;
                });

                localStorage.setItem("tasks", JSON.stringify(prevArry));
                e.currentTarget.remove();
            }
        });

        grid.append(ticket);
    }
}

loadtickets();