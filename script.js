// pplyfill for filter 

const arr =[10,20,30,40]
const filteredArray = arr.filter((value,index)=>{
    return value>20
})
// console.log(filteredArray)

Array.prototype.customFilter = function(callback){
    const result =[];
    for (let i=0;i<this.length;i++){
        if(callback(this[i],i,arr)){
            result.push(this[i])
        }
    }
    return result 
}
const customArrayFilter=arr.customFilter((value,index)=>value>20)
// console.log(customArrayFilter)
Array.prototype.customMap=function(callback){
    const result = [];
    for(let i=0;i<this.length;i++){
        result.push(callback(this[i]))
    }
    return result
}
const cutomMaparr=arr.customMap((value,index)=>{return value*2})
// console.log(cutomMaparr);
const user ={
    name:'Vikassh lal',
    greet :function(){
        console.log(this.name);
    }
}
function display(city,pin){
    console.log(this.name,city,pin);
}
// console.log(user.greet());
// console.log(display.call(user,'katihar'))
Function.prototype.customCall=function(context,...args){
    context= context || globalThis;
    const funKey = Symbol('fn');
    context[funKey]=this;
    const result = args?context[funKey](...args):context[funKey]()
    delete constext[funKey];
    return result;
}
// console.log(display.customCall(user,'Katihar',854105))
Function.prototype.customApply=function(context,args){
    context = context || globalThis;
    const funKey = Symbol('fun');
    if(args !==undefined && !Array.isArray(args)){
        throw new Error('The arguments you are passing is not an array')
    }
    context[funKey]=this;
    const result = args?context[funKey](...args):context[funKey]();
    delete context[funKey];
    return result;
}
// console.log(display.customApply(user,['katihar',954105]))

Function.prototype.customBind = function(context,...args){
    context = context || globalThis;
    const funKey = Symbol('fn');
    context[funKey]=this;
    return function(...newArgs){
        context[funKey](...args,...newArgs)
    }
}
const customBinding = display.customBind(user,'Katihar')
// console.log(customBinding(854105))

const person ={
    name:'Rameshh lal',
    address:{
        village:'Katihar',
        pin:'854105'
    }
}
const person2 = structuredClone(person)
person2.name='Vikassh lal';
person2.address.village='Darbhanga';
// console.log(person,person2)
function deepCopy(obj){
     if(obj ===null || typeof obj !=='object'){
        return obj
     }
     if(Array.isArray(obj)){
        return obj.map((item=>deepCopy(item)))
     }
     const colnedObject={};
     for( let key in obj){
        if(obj.hasOwnProperty(key)){
            colnedObject[key]= deepCopy(obj[key])
        }
     }
     return colnedObject;
}
let a=20
// console.log(deepCopy(a))//20
const arrOnly = [1,2,3,['ramessh lal' , 'vikassh lal']]
const arrOnly2 = deepCopy(arrOnly)
arrOnly2[3][1]='Narayan lal'
// console.log(arrOnly,arrOnly2)//[ 1, 2, 3, [ 'ramessh lal', 'vikassh lal' ] ] [ 1, 2, 3, [ 'ramessh lal', 'Narayan lal' ] ]

const person3 = deepCopy(person)
person3.name='Narayan Lal';
person3.address.pin='123456789'
console.log(person,person3)