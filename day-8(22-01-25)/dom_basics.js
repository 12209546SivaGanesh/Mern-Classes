// window.console.log("hello");
// window.console.log(window);
// window.console.log(document);
//  document.body.children[1].chidren[0].childern[0].innerText="Done for first Half";
// document.body.children[1].childern[0].childern[0].innerText="hiiiiiiiiiiiiii";
// //console.log(document.body.children[0].innerText);
//  document.body.children[1].children[0].children[0].innerText = "Blog 33";
//  document.body.style.backgroundColor = "red";
//document.body.style.backgroundColor = "red";
// const titles=window.document.getElementsByTagName("h4");
// titles[1].style.backgroundColor="red";

// const paras = document.getElementsByTagName("p");
// window.console.log(paras[1]);
// paras[0].style.backgroundColor="orange";
// singleparas=document.getElementById("text-2");
// singleparas.innerText="hiiiiiiiiiiiiiii";
const elements = document.getElementsByClassName("blog-text");
console.log(elements);

elements[0].innerText = "Hello, I am custom text <b><u>coming from JS</u></b>";