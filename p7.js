// File Module (fs)
// synchronous mode

    var ps = require("fs");
    ps.writeFileSync("Hello.txt","Hello World");
    var data = ps.readFileSync("Hello.txt", "utf-8");
    console.log(data);
    console.log("program ended");
