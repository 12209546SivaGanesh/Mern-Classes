// console.log("A-------Start");

// function doSomeThing(){
//     console.log("B---------Starting");
//     setTimeout(
//        () =>{
//             console.log("C------Callback Completed");
//         },0);
//         console.log("D------done"); 
// }
// console.log("E-----Made function"); 
// doSomeThing();
// console.log("F----end");
const getData= () => {
    const req=fetch("https://dummyjson.com/products");
    req.then((res) => { 
        const pr=res.json();
        pr.then((data)=>{
            console.log(data);
        })
    }).catch( (err) => { 
        alert(err.message);
    });
}
getData();
console.log("hi");