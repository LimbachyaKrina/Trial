// Create json object which contain array of object. Calculate perimeter of square and perimeter of circle by using side value
// and diameter value respectively and write this value in shape.txt file

var shape = [{"name":"square","side":25},{"name":"circle","diameter":30}]
var s = shape[0].side
var c = shape[1].diameter
var cper = 2 * 3.14 * (c/2)
var sper = 4 * s
console.log(cper,sper)
const ps = require("fs")
ps.writeFileSync("Shape.txt",cper.toString())
ps.appendFileSync("Shape.txt", sper.toString())