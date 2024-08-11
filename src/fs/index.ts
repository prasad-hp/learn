import fs from "node:fs"
fs.readFile("./src/fs/hello.txt", "utf-8", (err, data)=>{
    if(err){
        console.log(err)
    }else
        console.log(data)
})
fs.writeFileSync("./greet.txt", "Hello Prasad!!")

const data = fs.readFileSync("./greet.txt", "utf-8")
console.log(data)

