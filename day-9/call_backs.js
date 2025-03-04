// function showText(Text) {
//     console.log("-----",Text,"___________")
// }

// function sum( a,b){
//           return a+b;
// }
// const c=sum(20,30);
// showText(c);
function showText(Text) {
    console.log("-----",Text,"___________")
}

function sum( a,b,cb){
           const ans=a+b;
           cb(ans);
}
show(20,30, showText);
console.log("hi");