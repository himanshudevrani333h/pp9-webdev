const fs = require("fs");

// function print(ans)
// {
//     console.log(ans);
//     console.log("---------------------------")
// }

// function rd(data)
// { 
//     let read = fs.readFileSync(data,"utf-8");
//     print(read);
// }
// let processdata = process.argv;
// rd(processdata[2]);

// let count = 0;
// function printcalllback(err, data)
// {
//     if(!err)
//     {
//     console.log(data);
//     console.log("---------------------count-------------------")
//         count +=1;
//         if( count<10)
//         {   
//             fs.readFile("q"+(count+1)+".html","utf-8",printcalllback);
//         }
//     }
// }
// fs.readFile("q1.html","utf-8",printcalllback);

function printcall(err,data)
{
    if(!err)
    {
        console.log(data);
        console.log("---------------------------------")
    }
}

for( let i = 1; i<=10; i++)
{
    fs.readFile("q"+i+".html","utf-8",printcall);
}