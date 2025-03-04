// const getData = () => {
//     const req=fetch("https://dummyjson.com/products");
//     req.then( (res) =>{
//         const pr=res.json();
//         pr.then((dataObj) =>{
//            const products = dataObj.products;
//           // console.log("products:",products);
//            const firstProduct=products[0];
           
//            const para=document.createElement("p");
//            para.innerHTML=firstProduct.title;
//          //  console.log(firstProduct.title); 
//         })
//     }  ).catch((err) =>{
//         alert(err.message);
//     });
   

// } 
const getData = async() =>{
    const res=await fetch("https://dummyjson.com/products");
    const dataObj=await res.json();
    showProducts(dataObj);


}
getData();


const showProducts=(obj)=>{
    const products = obj.products;
    for(let i=0;i<products.length;i++){
        const singleProduct = products[i];
        const card= document.createElement("div");
        const para= document.createElement("p");
        para.innerText=singleProduct.title;
        card.appendChild(para);
        console.log(card);

    }
}