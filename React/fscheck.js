// var fs = require("fs")
// //  data = new Buffer.alloc(1000)
//  let data = new Buffer.from("")
// let data2 = new Buffer.from("abcdefghijkvhhjhkgjgjkghkjgjhkghjgfhgjfjhgf")
// for( let i =0; i<1000000; i++){
//    data = Buffer.concat([data,data2]);
// }
// fs.writeFile("write.txt",data,(err)=>{
// if(err) console.log("err");
// console.log("Done!")
// })


// const fs = require('fs');

// let writeStream = fs.createWriteStream('write.txt');

// // write some data with a base64 encoding
// for(let i=0; i<=10000000; i++){
// writeStream.write('aahsdkljfhdsaklhglkdsahgkdsahglkjagkhdsaklghsakddshfakjahskgjfhsadkjhgksadjhgkljdsahfakjahskgjfhsadkjhgksadjhgkljdsah', 'utf-8');
// }
// // the finish event is emitted when all data has been flushed from the stream
// writeStream.on('finish', () => {
//     console.log('wrote all data to file');
// });

// // close the stream
// writeStream.end();

// var readerStream = fs.createReadStream('write.txt');
// let writeStream = fs.createWriteStream('ip.txt');

// // Set the encoding to be utf8. 
// readerStream.setEncoding('UTF8');
// var data= "";
// // Handle stream events --> data, end, and error
// readerStream.on('data', function(chunk) {
// //   data += chunk.toUpperCase();
//   writeStream.write(chunk.toUpperCase(),'utf-8');
// });

// // writeStream.write(data,'utf-8');



// readerStream.on('end',function() {
// //    writeStream.write(data,'utf-8');
// //    writeStream.on('finish', () => {
// //       console.log('wrote all data to file');
// //   });
// // writeStream.end();
// console.log("done");
// });