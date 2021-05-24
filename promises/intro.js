let a = 2;

let ePromise = new Promise(function(res,rej) {
    if(a % 2 == 0) {
        res("yes! number is even");
    } else {
        rej("Oh! number is odd");
    }
});

ePromise.then(function(data) {
    console.log(data);
    console.log("hii");
}).catch(function(err) {
    console.log(err);
})


const fs = require("fs");

let readFilePromise = fs.promises.readFile("1.txt","utf-8");

console.log(readFilePromise);

readFilePromise.then(function(data) {
    console.log(readFilePromise);
    console.log("I ran secomd");
    return "hello";
})


console.log("i ran first");

readFilePromise.then(function(data) {
    console.log("I ran last");
})