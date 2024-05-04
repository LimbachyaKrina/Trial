var ps = require("fs")
// const mycallback = () =>{
//     console.log("Write operation complete")
// }
// ----- OR -----
// ps.writeFile("input.txt","Hello world",mycallback)

// ps.writeFile("input.txt", " Hello world", () => {console.log("Complete")})
// ps.readFile("input.txt","utf-8", () => {console.log("read")})
// console.log("Program ended")
ps.readFile("input.txt","utf-8", (err,data) => { 
    if(err)
    console.log(err);
    else{
        console.log(data)
    }
})
