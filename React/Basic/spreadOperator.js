// let a =[1,2,3]
// let b= [4,5,6]

// let d = [...a,...b]
// console.log(d);

// let ob1 = {
//     key1:1,
//     key2:2
// }

// let ob2 ={
//     key3:3,
//     key4:4,
//     ...ob1
// }

// console.log(ob2)

// let  arr =[4,8,7,9,12,13,16]
// let temp1= arr.slice(0,3)
// let temp2 = arr.slice(3);


// arr = [...temp1,3,...temp2]
// console.log(arr)


//Destructuring
// let a= ["ram","shyaam","ravi"]
// let[b,c] =a
// console.log(b);
// console.log(c);
// let [d,,e] =a   //skip "shyaam"

// let obj ={
//     x:1,
//     c:2,
// }

// let {x,c} = obj         //we have to name variable same as key in object
// console.log(x);
// console.log(c)

let obj ={
    x:{
        z:5,
    },
    c:2,
}

let {x:{z},c} = obj         //we have to name variable same as key in object
console.log(z);
console.log(c)