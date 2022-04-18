// let total= 0;
// let i = 0;
// while(i<=10){
//     console.log(total=total+i)
//     i++;
// }
// let num = 10;

// let total = num*(num+1)/2;
// console.log(total)

// let total = 0
// let i = 11;
// do {
//     i++;
// } while (
//     i < 10
// )
// console.log(i);

// let fruit = ["apple", 'banna', 'mango'];
// console.log(fruit[fruit.length-1])
// fruit[2]='kela';
// console.log(typeof fruit);
// console.log(Array.isArray(fruit));

// let array1  =['asasa', 'csscac', 'xaxaxaxa' ,'xaxaxxx'];
// let newArray= array1.slice(0).concat(['qwerrty'])

// console.log(newArray===array1);
// console.log(newArray);


// let fruit = ["apple", 'banna', 'mango'];
// let array2 = ['ok'];
// for(let i=0; i<fruit.length; i++){
//     array2.push(fruit[i]);
// }
// console.log(array2);

// let fruit = ["apple", 'banna', 'mango'];
// let i = 0;
// while(i<fruit.length){
//     console.log(fruit[i])
//     i++;
// }

// let fruit = ["apple", 'banna', 'mango'];
// for(let arr of fruit){
//     console.log(arr);
// }

// let fruit = ["apple", 'banna', 'mango'];

// const persons = {
// name: 'rawat',
// age: 12,
// list: ['ok','notOk','yesOk']
// }

// for(let person in persons){
// console.log(persons[person])
// }

// console.log(Object.keys(persons));
// for(let key of Object.keys(persons)){
//     console.log(persons[key])
// }

// const key1 = 'objectkey1';
// const key2 = 'objectkey2';

// const value1 = 'myvalue1';
// const value2 = 'myvalue2';

// const obj = {};
// obj[key1]= value1;
// obj[key2]=value2;
// console.log(obj);


// const newObj = {...'abcdefghijklmnopq1rtuvswxyz'}
// console.log(newObj);

// const persons = {
// name: 'rawat',
// age: 12,
// list: ['ok','notOk','yesOk']
// }

// const {name: ok,age,list}=persons;

// console.log(ok)

// const users = [
//     {userId:1, name:'kashish',age:12},
//     {userId:2, name:'rawat',age:16},
//     {userId:3, name:'kittu',age:18},
// ]

// const [{name}] = users;
// console.log(name)

// const numbers = [4,2,5,8];

// console.log(numbers.forEach(function(a,b){console.log(a,b)}))

// const users = [{ name: 'kashish', age: 23 }, { name: 'rawat', age: 32 }, { name: 'negi', age: 23 }, { name: 'bisht', age: 23 }];

// console.log(users);



// const nubers = [1,2,3,45,3,544,2323,2333,2443,5334];
// console.log(nubers.filter((a)=> a%2!==0))

// const nubers = [1,2,3432525,35253,4342423,5635324,2424263462,442154,4];

// function iseven(number){
// return number%2!==0;
// }

// console.log(nubers.filter(iseven));
// console.log(nubers.reduce((accu,elem)=>{
// return accu += elem;
// },0))


// const userCart = [{productId:1, productName: 'mobile', price: 2},
// {productId:2, productName: 'mobile', price: 4},{productId:3, productName: 'mobile', price: 5},]

// const newP = userCart.reduce((a,b)=>{return a+=b.price},0);
// console.log(newP)


// const nubers = [1,2,3432525,35253,4342423,5635324,2424263462,442154,4];
// nubers.sort((a,b)=>{return b-a });
// console.log(nubers);

// const array =['ok','notOk','yesOk'];

// console.log(array.find(())

// const users = [
//     {userId:1, name:'kashish',age:12},
//     {userId:2, name:'rawat',age:16},
//     {userId:3, name:'kittu',age:18},
// ];


// const newUser = users.find((user)=> user.userId === 2);
//  console.log(newUser);

// const obj = {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//     key4: 'value4',
// }
// const a = Object.assign({key: 'shiii'},obj);
// console.log(a);

// obj.key5 = 'value hg';
// console.log(obj);

// const obj = {
//     key1: 'value',
//     key2: 'value1'
// }
// const obj2 = {
//     key3: 'value3',

// }

// console.log()
// const people = [
//     {orderId: '123', custumerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [{productId: '123', price: 55},{productId: '234', price: 30}]},
//     {orderId: '234', custumerId: '234', deliveryDate: '01-01-1994', delivered: false, items: [{productId: '234', price: 30},{productId: '234', price: 50}]},
//     {orderId: '456', custumerId: '456', deliveryDate: '04-02-2000', delivered: true, items: [{productId: '456', price: 55},{productId: '678', price: 90}]},
//     {orderId: '789', custumerId: '789', deliveryDate: '05-07-2011', delivered: false, items: [{productId: '789', price: 55},{productId: '234', price: 40}]},
//     {orderId: '132', custumerId: '132', deliveryDate: '01-01-2021', delivered: true, items: [{productId: '132', price: 55},{productId: '132', price: 30}]},
// ]

// const order = people.filter((a)=> a.custumerId === ''+234 && a.delivered);
// console.log(order);
// console.log(people.map((a)=>{return {...a, totalAmount: a.items.reduce((a,b)=>{return a += b.price},0)}}))

// const order = people.some((a)=> a.delivered);
// conso


// const users = [
//     { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
//     { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
//     { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
//     { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
//     { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
//     { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
//     { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
//     { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
//     { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
//     { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
// ];

// const comments = [
//     { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
//     { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
//     { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
//     { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
//     { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
//     { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
//     { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
//     { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
//     { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
//     { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
// ];
// const firstName = users.map((a)=> a.firstName);
// const lastName = users.map((a)=> a.lastName);
// console.log(firstName)
// console.log(comments.map((s)=>{return {...s, firstName:users.map((a)=>{return}) }}))
// console.log(comments.map((s)=>{const {firstName,lastName} = users.find((a)=> a.id === s.userId);
// return {...s, firstName:firstName, lastName:lastName}}));

// console.log(comments.map((s) => { const { firstName, lastName } = users.find((a) => a.id === s.userId);
// return {...s,firstName,lastName} }))
// console.log(users.filter((s)=> s.id !== comments.userId))


const users = [{
    id: "e0aafb31-8ac6-48d4-99ee-12af8ddcbdae",
    email: "tcasaletto0@soundcloud.com",
    ip_address: "53.215.156.73"
}, {
    id: "a7b0221d-5228-4992-a964-b5f3e3d7a022",
    email: "nmoffett1@paginegialle.it",
    ip_address: "34.81.219.4"
}, {
    id: "1019b52c-db9d-45a2-975f-404455925a6a",
    email: "rcrampin2@yale.edu",
    ip_address: "65.181.114.151"
}, {
    id: "e8637c3b-645d-4742-a463-d2006742606f",
    email: "ddreinan3@smugmug.com",
    ip_address: "136.171.217.116"
}, {
    id: "a20803f2-c372-4f39-97b1-d8e948151c8c",
    email: "gdorkin4@taobao.com",
    ip_address: "220.228.4.97"
}, {
    id: "63f8e789-009d-4e7b-ad6b-cc8c8a1d1248",
    email: "vhucquart5@typepad.com",
    ip_address: "101.212.0.49"
}, {
    id: "74120248-03b5-4888-84c0-d1a459c6273b",
    email: "vsircombe6@marriott.com",
    ip_address: "28.180.205.167"
}, {
    id: "412a0669-7171-48b4-95eb-e898993ec1dc",
    email: "kdesouza7@t.co",
    ip_address: "61.44.195.62"
}, {
    id: "6cd04ecc-8316-4542-9faa-b8438e82b4ad",
    email: "sbehnke8@booking.com",
    ip_address: "1.176.238.27"
}, {
    id: "cfdf5009-84d3-4599-88c0-048c4fcae2ed",
    email: "clindsell9@nymag.com",
    ip_address: "44.37.119.76"
}];

// console.log(users.fill('delete'))
