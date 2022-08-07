const groceryList = [
    {name:"Apple",price:25,category:"Fruits"},
    {name:"Mango",price:35,category:"Fruits"},
    {name:"Tomatoes",price:15,category:"vegetable"},
    {name:"Milk",price:20,category:"Misc"},
    {name:"Bread",price:12,category:"Misc"},
    {name:"Eggs",price:18,category:"Misc"}
]
// ForEach
console.log(groceryList);
groceryList.forEach((item)=>{
    console.log(`The Cost Of ${item.name} is ${item.price}$ in Category of ${item.category}`)
})
//Map
const newPrice = groceryList.map((item)=>{
    return {name:item.name,price:item.price * 2}
})
console.log(newPrice);
newPrice.forEach((item)=>{
    console.log(` ${item.name} new Price is ${item.price}$`)
});
//Filter return all elements meet the condition
const fruits = groceryList.filter((item)=>{
    return item.category === 'Fruits'
})
console.log(fruits)
//Find return First  elements meet the condition
const misc = groceryList.find((item)=>{
    return (item.category).toLowerCase() === 'misc'
})
console.log( misc)
//FindIndex return First  elements meet the condition
const findIndex = groceryList.findIndex((item)=>{
    return (item.category).toLowerCase() === 'misc'
})
console.log(findIndex)

//Sort
const SortArray = groceryList.sort((a,b)=>{
    return a.name.localeCompare(b.name);
})
console.log(SortArray)
const SortPrice = groceryList.sort((a,b)=>{
    return a.price - b.price;
})
console.log(SortPrice);
// Some return Bolean According to the condition
const some = groceryList.some((item)=>{
    return item.price > 10 
})
console.log(some)
//Every return Bolean According to the condition

const every = groceryList.every((item)=>{
    return item.price < 10 
})
console.log(every)
// Reduce
// const initialValue = 0;
const total = groceryList.reduce((currentTotal,item,index)=>{
    // console.log("--------"+(index+1)+"---------");
    // console.log("CurrentTotal:",currentTotal);
    // console.log("InitialValue:",initialValue);
    // console.log("CurrentItemPrice:",item.price);
    // console.log("PriceAftereEveryIteration:",item.price+currentTotal);
    return item.price+currentTotal;
},0);
console.log(total);
// Includes
const number =[1,2,3,4,5,6,7];
const text = ['a','b','c','d']
console.log(number.includes(3));
//concat to join 2 Array

console.log(number.concat(text));
//flat convert multi-dimentsional array it single dimensional array
console.log(number.flat(2))
//flatMap maps on each item in an array
console.log(number.flatMap((num)=>{
    return num *10
}))
