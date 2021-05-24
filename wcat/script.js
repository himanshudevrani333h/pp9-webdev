#!/usr/bin/env node
const fs = require("fs");
// let data = fs.readFileSync("C:\\Users\\Himanshu\\Documents\\pp9-webdev\\wcat\\abc.txt","utf-8");
// console.log(data);

// let filename = process.argv[2];
// let filename2 = process.argv[3];
// let data = fs.readFileSync(filename,"utf-8");
// let data2 = fs.readFileSync(filename2,"utf-8");
// console.log(data +"\n" + data2);

// let procssData = process.argv;
// let data = " ";
// for( let i =2; i<procssData.length; i++)
// {
//     data += "\n"+ fs.readFileSync(procssData[i],"utf-8");

// }
// console.log(data);

// let processData = process.argv;
// console.log(processData);
// if( processData[2] == "w")
// {
//   fs.writeFileSync(processData[3], processData[4]);
// }else if( processData[2]== "a")
// { 
//     let previousData = fs.readFileSync(processData[3], "utf-8");
//     fs.writeFileSync(processData[3],previousData+"\n"+processData[4])

// }else{
//     let data = "";
//     let firsttimeincrease = false;
//     for( let i =2; i<processData.length; i++)
//     {
//         if(processData.includes("ne"))
//         {
//             if(!firsttimeincrease)
//             {
//                 i = i+1;
//                 firsttimeincrease = true;
//             }
//            let tempdata = fs.readFileSync(processData[i], "utf-8");
//            let line = tempdata.split("\n");
//            if( tempdata.includes("\r"))
//            {
//                line = tempdata.split("\r\n");
//            }
//            let finaldata = "";
//            for( let i =0; i<line.length; i++)
//            {   if(line[i] != "")
//                  finaldata +=  line[i] + "\n";
//            }
//            data += finaldata;
//         }else
//         {
//             data += "\n"+ fs.readFileSync(processData[i],"utf-8");
//         }
//     }
//     console.log(data);
// }

// let processData = process.argv;
// console.log(processData);
// let data = fs.readFileSync(processData[2],"utf-8");
// let temp = data.split("\n");
//   if(temp.includes("\r"))
//     {
//         temp = data.split("\n\r");
//     }

// let res = "";
// let no =1;
     
//     for(let i =0; i<temp.length; i++)
//     {
//         if(temp[i] != "\n" && temp[i] != "\r")
//         {
//             res += no +". "+ temp[i];
//             no++;
//             console.log(res);
//         }
        
//     }

let a1 = [0,1,2,3,4];
let a2 = ["a","b","c","d"];
let obj ={};

if(  a1.length ==0 || a2.length == 0)
{
    console.log("not possible");
}else{
    for(let i =0; i<a1.length; i++)
    {
        obj[a1[i]] = a2[i];
    }
}
console.log(obj);



