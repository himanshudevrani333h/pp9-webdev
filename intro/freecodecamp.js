
// // Profile Lookup
// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];


// function lookUpProfile(name, prop){
//     for(let i =0; i<contacts.length; i++)
//    {
//         if( contacts[i].firstName == name)
//         {  if(contacts[i].hasOwnProperty(prop))
//             {
//             return contacts[i][prop];
//             }else 
//             return "No such property";
//         }
//     }
//     return "No such contact";
// }

// console.log(lookUpProfile("Kristian", "lastName"));


// Record Collection
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  function updateRecords(object, id, prop, value) {
    if( prop != "tracks" && value != " ")
    {
        object[id][prop] = value;
    }else if( prop == "tracks" && object[id].hasOwnProperty("tracks") != true)
    {
        object[id][prop]= [value];
    }else if( prop == "tracks" && value != " ")
    {
        object[id][prop].push(value);
    }else if(value == " ")
    {
        delete object[id][prop];
    }

    return object;
  }
  
 console.log(updateRecords(collection, 1245, 'tracks', 'Addicted to Love'));