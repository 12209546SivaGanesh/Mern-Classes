// const ans1="hi";
// const ans2="how ";
// const ans3=" are you";
// const a='${ans1} ${ans2} ${ans3}';
// console.log(a);

// hello();
// function hello(){
//     console.log("hi ");
// }

// const temp=function hello(){
//     console.log("hi ");
// }
// console.log(temp);
// const temp=() =>{
//     console.log("hi");
// }
// temp();
// function hello(like, heart, name){
//     const temp=`${name} age is ${like + heart}`;
//     console.log(temp);
// }
// hello(10,10,"ravi");
// console.log(parseFloat(1.36));
const car ={
    engine: "va",
    model: "E6",
    brand: "Audi"
};
car.model="square";
car.mileage=25;

const car2 = car;
delete car2.model;
console.log(car2);
console.log(car);
const car3={...car2};
delete car3.brand;
console.log(car2);
console.log(car);
console.log(car3);