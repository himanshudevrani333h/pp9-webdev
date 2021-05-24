const fs = require("fs");
let sum = 0;
for(let i =1; i<=8; i++)
{
    let serialread = rdfile(i+".txt");

    serialread.then(function(data){
        let datas = data.split("\n");
        for( let i =0; i<datas.length; i++)
        {
            sum += parseInt(datas[i]);
        }
        console.log(i+".txt"+" has been readed");
        if( i == 8)
        {
            console.log(sum);
        }
        
    })
}

function rdfile(filename)
{
    return fs.promises.readFile(filename,"utf-8");
}