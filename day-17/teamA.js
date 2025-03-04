 const box=require("./teamB.js");




const sumArray=(arr)=>{
     let total=0;
    for(let i=0;i<arr.length;i++){
        total=box.sum(total,arr[i]);

    }
    return total;
}
module.exports = sumArray;