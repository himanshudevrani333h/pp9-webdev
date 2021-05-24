const fs = require("fs");

for( let i = 9; i<=16; i++)
{
    let data = "";
    let noofline = Math.floor(Math.random()*101);
    for( let i =0; i<noofline; i++)
    {
        if( i == noofline -1)
        {
            data += Math.floor(Math.random()*101);
        }else{
            data += Math.floor(Math.random()*101) + "\n";
        }
    }
    let parallelwrite = fs.promises.writeFile(i+".txt",data);

    parallelwrite.then(function(){
        console.log(i+".txt"+" has been written");
    })
}