const fs = require("fs");
let sum  = 0;
let filename = 1;
function readfle(err,data)
{
    if(!err )
    {

        let dataarr = data.split("\n");
       for( let i =0; i<dataarr.length; i++)
       {
           sum += parseInt(dataarr[i]);
       }
       filename +=1;
       if( filename >8)
       {
        console.log(sum);
        return;   
       }
      fs.readFile(filename+".txt","utf-8",readfle);
    }
}

fs.readFile(filename+".txt", "utf-8",readfle);