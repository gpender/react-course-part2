
// const person = {
//     name:'guy',
//     age:54,
//     location: {
//         city:'Angmering',
//         temp:20,
//         county:'East Sussex'
//     }
// }

// const {name,age} = person;

// console.log(`${name} is ${age} and he lives in ${person.location.city}`);

// const {county='WestSussex',city,temp:temperature} = person.location;
// if(city && temperature){
//     console.log(`Its ${temperature} in ${city}, ${county}`);
// }

const book = {
    title:'Ego is the Enemy',
    author:'Ryan Holiday',
    publisher:{
        name:'Penguin'
    }
}

const {name:publisherName='Self Published'} = book.publisher;

console.log(`${publisherName}`);