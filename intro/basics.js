
// let arr = [1,2,3,3,3,4,4,4,4,4,4,5,7];
// let count = 1;
// let max =0;
// let index =0;
// for( let i =0; i<arr.length; i++)
// { 
//   for( let j = i +1; j<arr.length; j++)
//   {
//       if( arr[i] == arr[j])
//       {
//           count++;
//       }     
//   }
//    if(count > max)
//       {   max = count;
//           count =0;
//           index =i;
//       }
// }
// console.log(arr[index]);

// let arr = ["red", "green","white", "white"];
// let a ="";
// for( let i =0; i<arr.length; i++)
// {
//  a += arr[i];
// }
// console.log(a);

// let a =[[1,2,3],[4,5,6],[7,8,9]];
// let sum =0;
// for(let i =0; i<a.length; i++)
// {
//     for( let j =0; j<a[i].length; j++)
//     {
//         sum += a[i][j];
//     }
// }
// console.log(sum);

// let a =[[1,2,3],[4,5,6],[7,8,9]];
// let res = [];
// let idx =0;
// for(let i =0; i<a.length; i++)
// {
//     for( let j =0; j<a[i].length; j++)
//     {   
//         res[idx] = a[i][j];
//         idx++;
//     }
// }
// console.log(res);

// let a = [1,2,3,4,5];
// for( let i =0; i<a.length; i++)
// {
//     a[i] = a[i] +2;
// }
// console.log(a);

// function abs(){
//     console.log("hello");
// }
// abs();

let arr = [1,2,3,4,5];
// function print( data , index)
// {
//     console.log(index, data);
// }
// arr.map(print);

// function add2( data, index)
// {
//     return data +2;
// }
// arr = arr.map(add2);
// console.log(arr);

// let ans = [];
// function odd(data, index)
// {
//     if( data %2 != 0)
//     {
//         ans.push(data);
//     }
// }
// arr.map(odd);
// console.log(ans);

function evenremove(data , index)
{
   if( data %2 != 0)
   return true;
   else
   return false;
    
}

// let ans = arr.filter(evenremove);
// console.log(ans);

// let abc = 234;
// let str1 = "hd";
// let str2 = 'hd';
// let str3 = `hd ${abc}`;
// console.log(str1,str2,str3);

// let a = "10";
// let no = parseInt(a);
// let bin = "";
// while(no > 0)
// {  
//    let rem = no % 2;
//    bin = rem + bin;
//    no = Math.floor(no /2);

// }
// console.log(bin);

// function bintodec( no)
// {  let pow =0;
//    let ans = 0;
//   for( let i = no.length -1; i>=0; i--)
//   {
//      let conv = parseInt(no[i]);
//      ans = ans + conv*Math.pow(2,pow);
//      pow++;
//   }
//   console.log(ans);
// }
// bintodec("1010");

// function charupper( no)
// { let str ="";
//   let char = no.substring(0,1);
//   str += char.toUpperCase();
//   str += no.substring(1,no.length);
//   console.log(str);
// }
// charupper("rajesh");

// function reverseeachword(string)
// {  
//   let res ="";
//   let word = "";
//   let initial =0;
//   for( let i =0; i<string.length; i++)
//   { let temp = string[i];
//     if( temp == " " || i == string.length-1)
//     {   if( i == string.length -1)
//       {
//          word = string.substring(initial,i+1); 
//       }else{
//        word = string.substring(initial,i); 
//       }
//      initial = i +1;
//     for( let j = word.length-1; j>=0; j--)
//      {
//        res += word[j];
//      }
//     res += " ";
//     word = "";
//   }
// }
//   console.log(res);
  
// }
// reverseeachword("My Name is Rajesh jhunjhunwala");

// function palindrome(string)
// {
//    let rev = "";
//    for( let i = string.length-1; i>=0; i--)
//    {
//        rev += string[i];
//    }
//    if( string == rev)
//    {
//       return true;
//    }
//    return false;
// }
// console.log(palindrome("nitin"));

// function countstring( string)
// {  
//    let Obj = {};
//    let value =1;
//    for( let i =0; i<string.length; i++)
//    {
//         let key = string.charAt(i);
//         if(key == " ")
//         {
//            continue;
//         }
        
//         if(Obj[key] == undefined)
//         {
//           Obj[key] = value;
//         }else{
//            let ov = Obj[key];
//            ov++;
//            Obj[key] = ov;
//         }
//    }
//    return Obj;
// }
// console.log(countstring("nitin negi"));





