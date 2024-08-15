console.log("First Statement")
setTimeout(()=>{
    console.log("Second")
}, 1000)
let a = 0
for(let i = 0; i< 100000; i++){
    a=+i;
}
console.log(a)


console.log("Third")