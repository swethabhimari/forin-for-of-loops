//1.using for in(recverse order)
let arr = [1, 2, 3, 4, 5, {id: 1, age: 25}, [1, 2, 3]]; 
for (let i in arr.reverse()) {// Loop through the array in reverse order using the 'for-in' loop
    console.log(arr[i]);
}
//using for of
let arr2 = [1, 2, 3, 4, 5, {id: 1, age: 25}, [1, 2, 3]];
for (let element of arr2.reverse()) {// Loop through the array in reverse order using the 'for-of' loop
    console.log(element);
}
//2.using for of (reverse a "string")
let string = "swetha";
let reversedStr = "";
for (let char of string.split('').reverse()) {// Loop through the string in reverse order
    reversedStr += char;
}
console.log(reversedStr);
//using for in
let str2 = "swetha";
let reversedStr2 = "";
for (let i in str2) {// the string in reverse order using 'for-in' loop
    reversedStr2 = str2[i] + reversedStr2;

}
console.log(reversedStr2);
//3.using for of (to print specific value)
var array=[1,2,3,4,5,{id:1,age:25},[1,2,3]]
for(value of array){
   if(typeof value==="object"){
    console.log(value.age)
   }
}
// //using for in
let arrr = [1, 2, 3, 4, 5, {id: 1, age: 25}, [1, 2, 3]];
//  the array using 'for-in' loop
for (let k in arrr) {
    if (typeof arrr[k] === 'object' && arrr[k].age) {
        console.log(arrr[k].age);
    }
}


