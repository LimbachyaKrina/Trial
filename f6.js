// Write a node.js script to copy content of one file to another file : source to destination

var ps = require("fs")
ps.writeFileSync("Source.txt","Hi guys, bye ladies")
var data = ps.readFileSync("Source.txt","utf-8")
ps.writeFileSync("Destination.txt",data)
