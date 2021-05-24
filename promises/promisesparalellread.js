const fs = require("fs");

let sum =0;
for( let i =1; i<=8; i++){
let parallelread = fs.promises.readFile(i+".txt","utf-8");

parallelread.then(function(data){
    
    let dataarr = data.split("\n");
    for( let i =0; i<dataarr.length; i++)
    {
        sum += parseInt(dataarr[i]);
    }
    console.log(i+".txt"+" has been readed");
    if( i == 8)
    {
        console.log(sum);
    }
})
}


