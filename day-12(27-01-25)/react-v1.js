console.log(React);
console.log(ReactDOM);

const parent =document.getElementById("dom-root");
 const root=ReactDOM.createRoot(parent);

const newTitle=React.createElement("h2",{},"Hello from REAL REACT");

root.render(newTitle);
