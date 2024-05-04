const fs = require("fs")
fs.writeFileSync("Trying.html",'<html><body><h1 style="color:red">Hello</h1></body></html>')
var data = fs.readFileSync("Trying.html","utf-8")
console.log(data)
