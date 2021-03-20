
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

// const book = {
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         name:'Penguin'
//     }
// }

// const {name:publisherName='Self Published'} = book.publisher;

// console.log(`${publisherName}`);

// Array destructuring
// const address = ['guy','99 King Drive', 'Angmering', 'East Sussex', 'BN164GB'];

// const [name,street,city,county] = address;

// console.log(`${name} ${street} ${city} ${county}`);

const item = ['Coffe (hot)', '$2.00', '$2.50'];

const [coffee,sm_price,med_price,lg_price='$5.00'] = item;
console.log(`A large ${coffee} costs ${lg_price}`);
