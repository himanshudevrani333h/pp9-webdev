const fs = require("fs");

let fname = 0;

function wrtefle(err)
{
    if( !err && fname<8)
    {
        fname++;

        let noOfline = Math.floor(Math.random()*101);
        let data ="";
        for(let i =0; i<noOfline; i++)
        {
            if( i == noOfline -1)
            {
                data += Math.floor(Math.random()*101);
            }else
            {
               data+= Math.floor(Math.random()*101)+"\n";
            }
        }

        fs.writeFile(fname +".txt", data, wrtefle);
    }
}

wrtefle(undefined);