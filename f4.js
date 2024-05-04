// Write a node.js program to CRUD operation of file management
// 1. Create folder name hello
// 2. Create file in it name : ABC.txt and enter data in it
// 3. Add more data at last in file
// 4. Read data without getting buffer data at first
// 5. Rename file 
// 6. Delete both file and folder




var ps = require("fs");
ps.mkdirSync("NWorld");
ps.writeFileSync("NWorld/ABC.txt","HI, how are you?");
var data = ps.readFileSync("NWorld/ABC.txt");
console.log(data);
ps.appendFileSync("NWorld/ABC.txt","What are you doing?");
var data1 = ps.readFileSync("NWorld/ABC.txt");
console.log(data1);
ps.renameSync("NWorld/ABC.txt","NWorld/HelloWorld.txt");
ps.unlinkSync("NWorld/HelloWorld.txt");
ps.rmdirSync("NWorld");

