function sum(a,b){
    console.log("----------calculating sum----");
    return a+b;
}
function product(a,b){
    console.log("----------calculating product---");
    return a*b;
}
 const container={
    sum,
    mul:product,
 }



module.exports = container;