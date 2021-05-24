const fs = require("fs");
let filename = 0;
let sum =0;
function readfle(file,err,data)
{
    if(!err )
    {

       let dataarr = data.split("\n");
       for( let i =0; i<dataarr.length; i++)
       {
           sum += parseInt(dataarr[i]);
       }
       filename +=1;
       console.log(file+" has been read");
       if( filename == 8)
       {
        console.log(sum);
        return;   
       }
      
    }
}

for( let i =1; i<=8; i++)
{
    fs.readFile(i+".txt", "utf-8", readfle.bind(this,i+".txt"));
}