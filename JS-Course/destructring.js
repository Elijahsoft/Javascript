// const employee = {
//     id:1,
//     name:"Elijah Soft",
//     age:18,
//     department:"UX/UI",
//     address:{
//         city:"Kigali",
//         country:"Rwanda",
//             }
// };
// -------------------
// Normal js way
//  -----------------
// const name = employee.name;
// const age = employee.age;
// console.log(name);
// console.log(age);
// const city = employee.address.city
// console.log(city);
//   ---------------------
// ES6 way
//   ---------------------
// const {name,age} = employee;
// const {address:{city}} = employee
// console.log(name);
// console.log(age);
// console.log(city);
//     ---------------------------------
//  Function way
//     ---------------------------------

// function destruction(employee){
//     console.log(`The Employee name is ${employee.name} and he live at ${employee.address. city} with ${employee.age} years old`)
// }
// destruction(employee)


// const fruits = ["apple",["bus","bike",{hello:"dei"}],"mango","pineapple","grapes"]
// console.log(fruits[1][2])




// -----------------------------------------------------------------------------------
                //   Destructing Array Infomartion Into new Array with Object
// -----------------------------------------------------------------------------------

const users =[
            ["Elijah","soft"],
            ["Laddie","Dev"],
            ["Cool","Boy"]
];
const userObj = users.map(([FirstName,LastName])=>{
    return [FirstName,LastName]
})
const userOb = users.map(([FirstName,LastName])=>{
    return {FirstName,LastName}
})
console.log(userObj)
console.log(userOb)