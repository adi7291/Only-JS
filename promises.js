//JAva script is a single threaded language it executes all of the synchronous code one after another line by line
// if it encounters any asynchronous code it iexecutes it later or after the execution of synchronous code.

// console.log('start')
// setTimeout(()=>{
//     console.log('asynchronous executes later')
// },1000)
// console.log('End')
//---------------------------------------------------------------------------------------------------
// console.log('Start');

// function printMessage(userName){
    
//     setTimeout(()=>{
//        return  userName
//     },0)
    
// }
// const message =printMessage('Ramessh lal',function(){
//     console.log(message)
// })
// console.log(message)
// console.log('End..')
//Start
//undefined
//End..
// we are getting undefined bcoz the printMessage function is not returning any things.
//the return under setTimeout is of arrow function return which we are not calling it and it is called by the JS Engine
//because the setTimeout is asynchronous and the function inside it will called automaticlly when the timers fires it 
//untill then the main function printMessage has already executed. And one more important hing is we are not capturing the value of 
// arrow function inside the setTimeout. 
//---------------------------------------------------------------------------------------------------

console.log('Start....')

function printFirstName(firstName,cb){
    setTimeout(()=>{
        return cb(firstName);
    },500)


}
function printSecondName(secondName,cb){
    setTimeout(()=>{
        cb(secondName)
    },1000)
}
function printThirdName(thirdName,cb){
    setTimeout(()=>{
        cb(thirdName)
    },500)
}
printFirstName('Ramessh',(firstName)=>{
    console.log(firstName);
    printSecondName('lal',(secondName)=>{
        console.log(secondName);
        printThirdName('Vikassh',(thirdName)=>{
             console.log(thirdName)
        })
    })
   
})

console.log('End..')