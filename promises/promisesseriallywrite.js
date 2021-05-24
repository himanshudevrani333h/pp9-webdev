const fs = require("fs");

function main()
{
    let filepromise = writefile("1.txt");

    for( let i =2; i<=8; i++)
    {
        filepromise = filepromise.then(function(){
            console.log(i-1+" written");
            return writefile(i+".txt");
        })
    }
    filepromise.then(function(){
        console.log("last file has been written");
    })
}



function writefile(filename)
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

    return fs.promises.writeFile(filename, data);
}

main();