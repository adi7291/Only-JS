
// function myVar(){
//   var a='ram';
//   console.log(a)
//   let b=100
//   console.log(b)
//   const c=200
//   console.log(c)
// }
// myVar()
// //   console.log(c)
// //   console.log(b)

// // console.log(a)

// {
//     let a='let'
//     const b='const'
//     var c='var'
//     console.log(a,b,c)
// }
//     console.log(c)

// let a=100
// {
//     let a=200
//     console.log(a)
// }
// console.log(a)

// function myVar(){
//     var a=100
//     {
//         const a=200
//         console.log(a)
//     }
//         console.log(a)

// }
// myVar()

// function myVar(){
//     let a=100;
//     const b=200;
//     var c=1000
//     if(a){
//         let b=300
//         const a=400
//         let c=2000
//         var a=3000
//         console.log(a,b,c)
//     }
//         console.log(a,b,c)

// }
// myVar()

// let a; var b; 
// a=100 ; b=200
// console.log(a,b)

// const c;
// c=1000
// console.log(c)

//Hoisting
// console.log(b)


// var b=200;
// console.log(a)
// let a=100;

// function myVar(){
//     var a=100
//     let b=200
//     const c=300;
//     console.log(a,b,c)
// }
// myVar()
//------------------
// const num= function (a){
//     return a
// }

// function double(a){
//     return a*num(a)
// }
// console.log(double(10))
//-------------------------
// function multiply(x){
//     return function(y){
//         return x*y
//     }
// }
// let double = multiply(2)

// console.log(double(2))
// ----------------------------

//IIFE (Immediately Invoked Function Expression)
// var a=1000;
// let b=3000;
// const c=4000;
// (function(){

//     let a=100;
//     var b=200
//     const c=300
//     console.log(a,b,c)

// })()
// console.log(a,b,c)
// ---------------------

// let a=20;

// let fun = function(){
//     console.log(a)
//     var a=100;
// }
// fun();
// function displayResult(result){
//     console.log(result);
// }

// function addition(a,b,fn){
//     let result=a+b;
//     return fn(result);
// }

// addition(10,20,displayResult);

// let arr =[1,2,3,4,5,6]

// let result = arr.map((item,index)=>{
//     return item*2
// })
// console.log(result)

// function double(item){
//     return item*2
// }
// let arr1=[]
// for(let i=0;i<arr.length;i++){
//     arr1.push(double(arr[i]))
// }
// console.log(arr1)
//---------------------------------------------------------------
// Arrow function
// const displayName = function (name){
//     console.log('Hello' ,name)
// }
//---------------------------------------------------------------
// const displayArrowName =(name)=>{
//     console.log('HII',name);
// }
// displayName('Ram')
// displayArrowName('Shyam')
//---------------------------------------------------------------
// const displayShortName = name => console.log(` Hiii ${name}`)
// displayShortName('Ram');
//---------------------------------------------------------------
// const user = {
//     name:'Ram',
//     normalFunction :function(){
//         console.log(`Hellon from Normal function ${this.name}`);
//     },
//     arrowFunction:()=>{
//         console.log('Hii from Arrow function',this.name)
//     }
// }
// user.normalFunction();
// user.arrowFunction();   
//---------------------------------------------------------------
// const user = ()=>{
//     name:'Ram'
// }
// console.log(user()) // undefined
//---------------------------------------------------------------
// const user = ()=>{
//     return {name:'Ram'}
// }
// console.log(user()) // {name:'Ram'}
//---------------------------------------------------------------
// const user =()=>({
//     name:"Ram"
// })
// console.log(user()) // {name:'Ram'}
//---------------------------------------------------------------

// const user = {
//     name:'Ram',
//     normalFunction :function(){
//         console.log(`Hellon from Normal function ${this.name}`);
//     },
//     arrowFunction:()=>{
//         console.log('Hii from Arrow function',this.name)
//     },
//     nestedArrowFunction:function (){
//         const name = 'Vikassh lal'
//         const arrow1=()=>{
//             console.log(this.name)
//         }    
// arrow1()
//     }
// }
// user.normalFunction();
// user.arrowFunction();   
// user.nestedArrowFunction;   
//---------------------------------------------------------------
// const obj ={
//     value:100,
//     method(){
//         setTimeout(()=>{
//             console.log(this.value)
//         },1000)
//     }
// }
// obj.method();
//-----------------------------------------------------------
// const name='Ram'
// function greet (){
//     console.log('Hello',this.name)
// }
// greet()
// const user = {
//     name:'Shyam',
//     age:30,
//     displyAge: function(){
//         console.log(`${this.name}, your age is ${this.age}`)
//     }
// }

// const anotherUser={
//     name:'Rameesh lal',
//     age:21,
// }
// user.displyAge()
// anotherUser.displyAge()

//-----------------------------------------------------------

// const user ={
//     name:'Rameesh lal',
//     greet(){
//         setTimeout(function(){
//             console.log(this.name)
//             setTimeout(()=>{
//                 console.log(this.name);
//             },1000)
//         },1000)
//     }
// }
// user.greet();
//undefined
//undefined
//----------------------------------------------------------
// const user={
//     name:'Rmaeesh lal',
//     age:30,
//     greet(){
//         console.log('Hello',this.name)
//     }
// }
// const anotherUser ={
//     name:'Vikassh lal',
//     greet:user.greet
// }
// anotherUser.greet() // Hello Vikassh lal
// user.greet() // Hello Rameesh lal
//----------------------------------------------------------


//  const user = {
//     name:'Rameesh lal',
//     greet(){
//         setTimeout(()=>{
//             console.log(this.name)
//             setTimeout(()=>{
//                 console.log(this.name)
//             },1000)
//             setTimeout(function(){
//                 console.log(this.name)
//             },100)
//         },1000)
//     }
// }
// user.greet()

//------------------------------------------------------------
// const user ={
//     name:'Ramesh lal',
//     age:30,
//     greet(){
//         console.log(this.name+ 'has' + this.age)
//     }
// }
// user.greet()
// const anotherUser={
//     name:'Vikassh lal',
//     age:20,
// }
// anotherUser.greet()
//------------------------------------------------------------
// "THIS" for normal function depends on how the function is called, ie. on which object it is calles but the function must be accessible o the 
// the object it can be defiled outide or inside of the object.
// function greet(){
//     console.log('Hello',this.name)
// }

// const user={
//     name:'Ramessh lal',
//     greet:greet,
// }
// user.greet()

// call bind and apply

// function greet(){
//     console.log('Hello',this.name);
// }
// const user = {
//     name:'Ramessh lal',

// }
// greet.call(user) // Hello Ramessh lal

//Apply this is same as call method of fuction but the difference is that call method takes arguments as a list while apply method takes 
// arguments as as array.

// function greet(age,city){
//     console.log('Hello',this.name,age,city);
// }
// const user ={
//     name:'Ramessh lal',
// }
// greet.call(user,30,'Katihar');
// greet.apply(user,30,katihar);
//----------------------------------------------------------------------------------------------
// Bind method is used to create a new function with a specific this value and arguments.
// it does not invoke the function immediatily but returns a new function that can be invoked later.

// function greet(age,city){
//     let section = '12 B'
//     console.log(this.name,city,age);
// }

// const user = {
//     name:'Ramessh lal',
// }

// const newUser = greet.bind(user,30,'katihar')
// newUser()

//--------------------------------------------------------------------------------------------------

// const user ={
//     name:'Ramessh lal',
//     greet:function greet(){
//     console.log(this.name)
// }

// }
// // user.greet()
// setTimeout(user.greet,1000)//undefined
//-------------------------------------------------------------------------------------

// const status='HIII';

// setTimeout(function(){
//     const status='Hello'
//     const data ={
//         status:'Hi there!!',
//         greet:function(){
//           return this.status
//         }
//     }
//     console.log(data.greet())
//     console.log(data.greet.call(this))
    
// })
//-------------------------------------------------------------------------

// const animals=[
//     {species:'lion',name:'king'},
//     {species:'Whale',name:'Queen'}
// ]
// function printAnimal(i){
//     this.print=function(){
//         console.log('#'+i,this.species+':'+ this.name)
//     }
//     this.print()
// }
// for( let i=0;i<animals.length;i++){
// printAnimal.call(animals[i],i)

// }
//------------------------------------------------------------------------

// const ar1 =[1,2,3]
// const ar2 =['a','b','c']
// const ar3 = ['x','y','z']

//  const ar=[...ar1,...ar2]
//  console.log(ar)
////------------------------
// ar1.push(...ar2,...ar3)
// console.log(ar1)

// console.log(ar1.concat(ar2))
// console.log(ar2.concat(ar1))
// console.log(ar1,ar2)
// // concat method is appending two array in one another new array

// for(let i=0;i<ar2.length;i++){
//    ar1.push(ar2[i])
// }
// console.log(ar1)
// ar1.push.apply(ar1,ar2,ar3)
// console.log(ar1)
//---------------------------------------------
// find max number in an array and nin number
// const arr = [2,5,6,3,8,19]
// console.log(Math.min.apply(null,arr))
//---------------------------------------------
// function chackPassword(success,failed){
//     const password = prompt('Password?:','')
//     if(password=='ramessh lal') success()
//       else failed()
// }
// const user ={
//     name:'ramessh lal',
//     loginSuccess(){
//         console.log(`${this.name} is logged in.`)
//     },
//     loginFailed: function (){
//         console.log(`${this.name} loggedin failed.`)
//     }
// }

// chackPassword(user.loginSuccess.bind(user),user.loginFailed.bind(user))

// function checkPassword(ok,fail){
//     const password = prompt('password?:','')
//     if(password=='ramessh lal') ok()
//         else fail()

// }
// const user ={
//     name:'ramessh lal',
//     login(result){
//         console.log(`${this.name} ${result ? 'login successful' : 'login fail'}`)
//     }
// }
// checkPassword(user.login.bind(user,true),user.login.bind(user,false))

//===========================================================================================

// const person = {
//     gree(){
//         console.log('Hello')
//     },
//     age:20,
// }
// const student = Object.create(person);
// console.log(student)//{}
// console.log(student.age)//20
//
// student is protype of person. student does not copy the properties of person but it has a prototypal chain.
// const arr =[1,2,3,4]
// console.log(arr.map)
// console.log(arr.__proto__)
// console.log(Array.prototype)
// console.log(Object.getPrototypeOf(arr))

let n=10
console.log(n.__proto__===Number.prototype)
let b=true
console.log(b.__proto__===Boolean.prototype)
