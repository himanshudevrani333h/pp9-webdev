const fs = require("fs");

function str() {
    let noOfline = Math.floor(Math.random() * 101);
    let str = "";
    for (let i = 0; i < noOfline; i++) {
        if (i == noOfline - 1) {
            str += Math.floor(Math.random() * 101);
        } else {
            str += Math.floor(Math.random() * 101) + "\n";
        }
    }
    // console.log(file+".txt"+" has been written");
    // fs.writeFile(file+".txt",str);
    return str;
}

function parallelwrite(file, err)
{
    if(!err)
    {
        console.log(file+" has been written");
    }
}

for (let i = 9; i <= 16; i++) {
    let data = str();
    fs.writeFile(i + ".txt", data, parallelwrite.bind(this, i + ".txt"));

}
