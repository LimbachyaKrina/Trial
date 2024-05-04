// Write example as below
// 1. Create one csv file with minimum two line of data and copy the file content in json file.
// Read the json file data and print on console 
// 2. Write simple html code and create one file named H1 with html extension. 
// 3. Write a simple json object with two properties name and branch two.json file. Read the file data and print on console

const fs = require("fs")
csv = fs.readFileSync("data.csv","utf-8")
array = csv.split("\r")
// column wise divide
let json = JSON.stringify(array)
// JavaScript object and converts it into a JSON string
fs.writeFileSync("test.json",json)
json_data = fs.readFileSync("test.json","utf-8")
json_parse = JSON.parse(json_data)
// to convert string into object
console.log(json_parse)