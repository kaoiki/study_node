var fs = require('fs');
//阻塞
// var data = fs.readFileSync("./test.txt");
// console.log(data.toString());
// console.log("Ending");

//非阻塞
fs.readFile("./test.txt",function(err,data){
    if(err) return console.log(err);
    console.log(data.toString());
});
console.log("Ending");
