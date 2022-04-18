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


const accounts = [{
    _id: "5e56d5f5c00d45b8f1125ef4",
    index: 0,
    guid: "955310d3-45df-47e7-bc9c-92504d5e92d2",
    isActive: true,
    balance: "$3,926",
    picture: "http://placehold.it/32x32",
    age: 26,
    eyeColor: "green",
    name: "George Bond",
    gender: "male",
    company: "GEEKOL",
    email: "georgebond@geekol.com",
    phone: "+1 (862) 591-2584",
    address: "677 Rost Place, Brandermill, Virgin Islands, 854",
    about: "Est deserunt incididunt incididunt et. Et reprehenderit labore officia fugiat deserunt et non consequat velit et laboris duis. Reprehenderit dolore dolor reprehenderit culpa. Nulla duis do dolore magna cupidatat mollit quis ullamco duis.",
    registered: "2014-05-31T09:59:01 -01:00",
    latitude: -30.600915,
    longitude: -83.795214,
    tags: ["nostrud", "aliquip", "est", "laboris", "voluptate", "do", "dolor", ["deserunt", "ipsum"], ["consectetur", "quis", "commodo"]],
    friends: [ {id: 0, name: "Alisa Ford"}, {id: 1, name: "Hess Howell"}, {id: 2, name: "Gwendolyn Hendrix"} ],
    greeting: "Hello, George Bond! You have 2 unread messages.",
    favoriteFruit: "banana",
},
{
    _id: "5e56d5f51837c78c32ed16ef",
    index: 1,
    guid: "416d3864-dc91-45e3-817c-07562b04b512",
    isActive: false,
    balance: "$1,273",
    picture: "http://placehold.it/32x32",
    age: 25,
    eyeColor: "green",
    name: "Fay Carlson",
    gender: "female",
    company: "SIGNIDYNE",
    email: "faycarlson@signidyne.com",
    phone: "+1 (922) 529-2437",
    address: "786 Belvidere Street, Carbonville, South Dakota, 3020",
    about: "Ullamco deserunt nostrud minim consectetur ad enim ipsum consectetur. Excepteur ad eiusmod ut quis in magna cillum qui commodo ad do eu. Nulla aliquip Lorem excepteur laboris elit.",
    registered: "2017-04-18T02:00:02 -01:00",
    latitude: 74.274128,
    longitude: -119.604152,
    tags: ["et", "ut", "mollit", "occaecat", "ipsum", "mollit", "pariatur"],
    friends: [{id: 0, name: "Miranda Little"}, {id: 1, name: "Ellen Burks"}, {id: 2, name: "Shanna Logan"}],
    greeting: "Hello, Fay Carlson! You have 10 unread messages.",
    favoriteFruit: "strawberry",
},
{
    _id: "5e56d5f54b9a9491ba37fec9",
    index: 2,
    guid: "46839c30-0b7e-4009-98f1-9b8d770a0c88",
    isActive: false,
    balance: "$3,455",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "blue",
    name: "French Bennett",
    gender: "male",
    company: "PASTURIA",
    email: "frenchbennett@pasturia.com",
    phone: "+1 (883) 501-3963",
    address: "856 Hemlock Street, Alfarata, Nevada, 5261",
    about: "Nulla sunt ea sunt labore id excepteur elit incididunt et irure. Ut pariatur ad eu ut qui est consectetur labore enim fugiat. Occaecat incididunt ex sunt cillum Lorem in aliquip est voluptate aliquip pariatur reprehenderit ad. Aute nisi et enim enim. In voluptate eu minim duis.",
    registered: "2015-04-16T11:53:33 -01:00",
    latitude: 85.491905,
    longitude: 90.342252,
    tags: ["laboris", "reprehenderit", "est", "in", "duis", "voluptate", "non"],
    friends: [{id: 0, name: "Mayer Sullivan"}, {id: 1, name: "Wiggins Hudson"}, {id: 2, name: "Jacqueline Gibbs"}],
    greeting: "Hello, French Bennett! You have 10 unread messages.",
    favoriteFruit: "apple",
},
{
    _id: "5e56d5f55dd72bb06144c70c",
    index: 3,
    guid: "52b94117-bd93-4d8f-b8e3-f2fd1c3988fc",
    isActive: false,
    balance: "$1,733",
    picture: "http://placehold.it/32x32",
    age: 30,
    eyeColor: "blue",
    name: "Shannon Mitchell",
    gender: "male",
    company: "DECRATEX",
    email: "shannonmitchell@decratex.com",
    phone: "+1 (876) 447-3381",
    address: "870 Tillary Street, Aurora, Vermont, 8055",
    about: "Occaecat adipisicing tempor ut enim consectetur enim sit ea qui consequat sint anim sint. Sint elit occaecat eiusmod consectetur veniam ad do. Voluptate reprehenderit pariatur id deserunt sunt reprehenderit eiusmod. Aute incididunt aliquip ad aliquip. Commodo cupidatat nisi velit eiusmod qui quis tempor eiusmod sit velit ex. Ad tempor cillum incididunt aliqua labore eu voluptate voluptate cillum aute amet veniam. Velit elit occaecat esse fugiat minim deserunt sit amet et non ea sit cupidatat.",
    registered: "2014-01-29T04:55:04 -00:00",
    latitude: 77.845921,
    longitude: -137.754911,
    tags: ["consequat", "non", "dolore", "cupidatat", "irure", "ipsum", "quis"],
    friends: [{id: 0, name: "Isabelle Luna"}, {id: 1, name: "Marissa Beach"}, {id: 2, name: "Sarah Simmons"}],
    greeting: "Hello, Shannon Mitchell! You have 4 unread messages.",
    favoriteFruit: "banana",
},
{
    _id: "5e56d5f5bb33b3df103cbfb9",
    index: 4,
    guid: "2fc0bb48-ad7f-4c91-a655-6fcb761a1e8f",
    isActive: true,
    balance: "$1,839",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "brown",
    name: "Johns Hooper",
    gender: "male",
    company: "ZENTHALL",
    email: "johnshooper@zenthall.com",
    phone: "+1 (868) 432-2105",
    address: "446 Emmons Avenue, Tyro, South Carolina, 3627",
    about: "Ipsum ullamco reprehenderit nulla sint. Deserunt reprehenderit excepteur dolore quis et culpa in. Adipisicing consectetur amet reprehenderit ex velit incididunt quis ipsum reprehenderit in irure. Adipisicing Lorem minim eu laborum ex ullamco nostrud reprehenderit ullamco minim minim non. Magna id fugiat duis officia deserunt ullamco est esse.",
    registered: "2017-09-06T09:24:11 -01:00",
    latitude: -33.444624,
    longitude: 99.697197,
    tags: ["et", "minim", "sunt", "irure", "et", "esse", "consectetur"],
    friends: [{id: 0, name: "Cynthia Hays"}, {id: 1, name: "Estela Walton"}, {id: 2, name: "Christy Ball"}],
    greeting: "Hello, Johns Hooper! You have 1 unread messages.",
    favoriteFruit: "apple",
}];


console.log(accounts.map((a)=>a.friends ).flat())
