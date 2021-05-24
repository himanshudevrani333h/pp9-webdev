// 1st question
function sevenboom(a)
{  let flag =  false;
   for( let i =0; i<a.length; i++)
   {
       if(a[i]<10 && a[i] == 7)
       {
           Console.log("Boom");
           flag = true;
           break;
       }else {
           let n = a[i];
           while(n !=0)
           {
              let rem = n%10;
              n = n/10;
              if( rem == 7)
              {
                  console.log("Boom");
                  flag = true;
                  break;
              }
           }
       }
       }
       if(!flag)
       {
           console.log( "there is no 7 in the array" );
       }
   }

let a= [1,2,3,5,4,6,10,8,9,5];
sevenboom(a);

// q 2
function coordin(a) {
    let x = 0;
    let  y = 0;
    let dir = 1;
    for (let i = 0; i < a.length; i++) {
        if( dir >4)
        {
            dir %= 4;
        }
        if (dir == 1) {
            y += a[i];
            dir++;
            continue;
        } else if ( dir == 2) {
            x += a[i];
            dir++;
            continue;
        } else if (dir == 3) {
            y -= a[i];
            dir++;
            continue;
        } else  {
            x -= a[i];
            dir++;
            continue;
        } 
    }
    console.log("("+x+","+y+")");

}
let cord = [0,0];
coordin(cord);

// 3 question
function counttrue(a)
{
  let count = 0;
  for( let i =0; i<a.length; i++)
  {
        if( a[i] == true)
        {
            count++;
        }
  }

  return count;
}

let a = [];
let res =counttrue(a);
console.log(res);
