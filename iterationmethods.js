
//map()

// 1. Double the numbers in an array: [1, 2, 3, 4, 5] → [2, 4, 6, 8, 10]


let arr=[1,2,3,4,5];
let x=arr.map((a)=>{
    return a*2;
})
console.log(x);

// 2. Convert strings to uppercase: ["hello", "world"] → ["HELLO", "WORLD"]

let arr1=["hello", "world"]
let x1=arr1.map((a)=>{
    return a.toUpperCase();
})
console.log(x1);


//fiter()
// 1. Get even numbers from an array: [1, 2, 3, 4, 5] → [2, 4]


let arr=[1, 2, 3, 4, 5];
let x1=arr.filter((a)=>{
    return a%2==0;
})
console.log(x1);




// 2. Get strings longer than 5 characters: ["hello", "world", "abc"] → ["hello", "world"]

let arr2=["hello", "world", "abc"]
let x2=arr2.filter((a)=>{
    return a.length>=5;
})
console.log(x2);


// ForEach
// 1. Log each number in an array: [1, 2, 3, 4, 5] → console logs each number

let arr=[1, 2, 3, 4, 5];
arr.forEach((a)=>{
    console.log(a);
})


// 2. Append "!" to each string in an array: ["hello", "world"] → ["hello!", "world!"]

let arr1=["hello", "world"];
arr1.forEach((a)=>{
  console.log(a +'!');
})

// Every
// 1. Check if all numbers in an array are positive: [1, 2, 3, 4, 5] → true

let arr=[1,2,3,4,5]
let x=arr.every((a)=>{
    return a;
})
console.log(x)




// 2. Check if all strings in an array are longer than 5 characters: ["hello", "world", "abc"] → false
let arr=["hello", "world", "abc"]
let x=arr.every((a)=>{
    return a.length>=5;
})
console.log(x)


// Some
// 1. Check if any number in an array is even: [1, 2, 3, 4, 5] → true

let arr=[1, 2, 3, 4, 5] 
let x=arr.some((a)=>{
    return a%2==0;
})
console.log(x)




// 2. Check if any string in an array contains "x": ["hello", "world", "max"] → true

let arr=["hello", "world", "max"]
let x=arr.some((a)=>{
    return a.includes("x");
})
console.log(x)

// Find
// 1. Find the first even number in an array: [1, 2, 3, 4, 5] → 2

let arr=[1, 2, 3, 4, 5] 
let x=arr.find((a)=>{
    return a%2==0;
})
console.log(x)


// 2. Find the first string in an array that contains "x": ["hello", "world", "max"] → "max"

let arr=["hello", "world", "max"]
let x=arr.find((a)=>{
    return a.includes("x");
})
console.log(x)


// FindIndex

// 1. Find the index of the first even number in an array: [1, 2, 3, 4, 5] → 1

let arr=[1, 2, 3, 4, 5] 
let x=arr.findIndex((a)=>{
    return a%2==0;
})
console.log(x)


// 2. Find the index of the first string in an array that contains "x": ["hello", "world", "max"] → 2

let arr=["hello", "world", "max"]
let x=arr.findIndex((a)=>{
    return a.includes("x");
})
console.log(x)


