const fs=require("node:fs");
 

const start =Date.now();
console.log("-----START--------",start);

function myReadFile(){

console.log("------------");
const ans=fs.readFileSync("./dummy.txt", {encoding: "utf-8"});
console.log(ans);
}
myReadFile();