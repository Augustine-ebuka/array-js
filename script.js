// from provide a convineint way to create arrays from diferrent kinds pf iterable
// const str = '12345678'
// const newNum = Array.from(str, Number)
// const newDup = Array.from(dup, (dup)=> dup + 2)
// console.log(newDup)

// isArray return true or false
// const dup = [1,2,2,45,7,6,7,6,3,3,2,1]
// console.log(Array.isArray(dup));

// array.some is used to check if some of the items in an array meet a conditiion. it take callback function

// const num  = [2,56,88,4,7]
// const check = num.some(num => num >46)
// console.log(check);
// console.clear()

// splice remove or replace an items and takes optionally an item you want to add
// splice method modify the array

// const num = [2,4,6,8,2,6]

// say we want to re move from indx 3 onward

// const deleted = num.splice(2, 3)
// this means: i want to start remoiving from indx 2 and i want to remve 3 items from the list
// console.log(deleted)
// deleted will return the removed items and num will return the modified list

// pop method reomves an item from the right and return it

// const num = [1,2,3]
// console.log(num.pop())

// // every method execute on all the items and return true or false if all the items return true or false
// const num = [[1,3,4,],[5,6,7], 'helllo']

// const check = num.every(num => Array.isArray(num))
// console.log(check)
// console.log("hahahahahs")

// fill method changes all items with a provided values it changes the original array

// const num = [1,4,5,6,7]
// function fillbucket(n){
//     return Array(n).fill(0).map((_, idx)=> idx + 1)
// }

// console.log(fillbucket(10))


// map method execut function on a given array and return the array it doesnt modify the origial array
// const products = [
//     {
//     namm:"hp laptop",
//     price:3000,
//     count: 5
// },
//     {
//     namm:"power pack",
//     price:400,
//     count: 10
// },
//     {
//     namm:"charger",
//     price:90,
//     count: 5
// },
// ]
// const checkTotalProdValu = products.map((prod)=>({
//     name: prod.namm,
//     total: prod.count*prod.price
// }))
// console.log(checkTotalProdValu)

// filter method removes a set of array provided the call back func returns false

const num3 = [2,3,4,6,,8,5,3,6]
// list out nums that are > 5

// const newNum = num3.filter(num => num >5)
// console.log(newNum)

// const people = [
//     {
//         name:"isaac",
//         age:32
//     },
//     {
//         name:"Alice",
//         age:17
//     },
//     {
//         name:"isaac",
//         age:18
//     },
// ]
// say we only need people that age > 18
// const adult = people.filter(pep=> pep.age >= 18)
// console.log(adult)

// // say we want to remove duplicate from A list of num
// const myNum = [1,2,3,2,5,6,8]
// const newMyNu = myNum.filter((value,index,array)=>{
//     return array.indexOf(value) == index
// })
// console.log(newMyNu)

// indexOf method return the index of an element its return the index of the first elemet found an array
// can be used to maybe swap an element in an array
//  const names = ['jay','joy','tori']
// //  say we want to swap jay and tor
// const indxjay = names.indexOf('jay')
// const indxtori = names.indexOf('tori')
// names[indxjay] = 'tori'
// names[indxtori] = 'jay'
// console.log(names)

// splice method is used for returning some portion of an array and it doesnt modify the origal list

// const participant = ['ivan','toney','buck', 'tina']

// const winner = participant.slice(1)
// // returns the first 3
// console.log(winner)
// console.log(participant)

// sort method is used to sort an array of items according to the utf-16 character. so to sort numbers a compare function is going to be used
// const nums = [34,23,5,8,3,1,67,3]
// console.log(nums.sort((a,b)=> a-b).filter((value,ind, array)=> array.indexOf(value)==ind) );






