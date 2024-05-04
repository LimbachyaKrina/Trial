// Write a node.js program to sort an integer array where all elements are available in file separated by white space
// print sorted array on node.js server

var ps = require("fs");
ps.writeFileSync("HSort.txt","1 12 3 15 18 5")
var data = ps.readFileSync("HSort.txt","utf-8")
var arr = data.split(" ")
for(i = 0; i < arr.length; i ++){
    for(j = i+1; j < arr.length; j ++){
        if(parseInt(arr[j]) < parseInt(arr[i])){
            var store = arr[j]
            arr[j] = arr[i]
            arr[i] = store
        }
    }
}
console.log(arr)





