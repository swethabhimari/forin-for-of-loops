var obj={
    name:"swetha",
    batch:19,
    tech:"good",
    age:16
}
for(prop in obj){
    console.log(prop)
}
for(prop in obj){
    console.log(obj[prop])
}
for(prop in obj){
    console.log(prop +":"+obj[prop])
}
//for of
var array=[1,2,3,"s","t",{id:1},[2,5,10]];
for(elem of array){
    console.log(elem)
}
const colors=["red","blue","green"]
for(index in colors){
    console.log("index",index+":"+colors[index]);
}
const a=[1,2,3]
a[a.length]=a.pop();
console.log(a)
//
var d=[1,2,3,[1,2,3],{id:1,age:26}]
for(value of d){
   if(typeof value==="object"){
    console.log(value.age)
   }
}
//
const g=[1,2,3]
for(i=g.length-1;i>=0;i--){
     console.log(g[i])
}
//string
const name='john doe';
for(char of name){
    console.log(char)
}
//object's value
const person={
    name:"john",
    age:30,
    occupation:"software developer"
}
for(value of Object.keys(person)){
    console.log(value)
}
const person1={
    name:"john",
    age:30,
    occupation:"software developer"
}
var res={}//empty object to store the result
for(let [key,value] of Object.entries(person1)){
    res[key]=value;
   console.log(res)
}