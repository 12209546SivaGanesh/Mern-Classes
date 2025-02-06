const events = [
    {
        title: "Welcome Week",
        description: "Kick off the year with fun activities and events for new students.",
    },
    {
        title: "Club Fair",
        description: "Explore different student clubs and organizations on campus.",
    },
    {
        title: "Career Fair",
        description: "Network with potential employers and learn about career opportunities.",
    },
    {
        title: "Homecoming Game",
        description: "Cheer on the school's football team at the annual homecoming game.",
    },
    {
        title: "Fall Festival",
        description: "Enjoy seasonal festivities, food, and music at the fall festival.",
    },
    {
        title: "Guest Speaker Series",
        description: "Hear from influential figures in various fields.",
    },
    {
        title: "Study Abroad Fair",
        description: "Learn about study abroad programs and opportunities.",
    },
    {
        title: "Volunteer Day",
        description: "Give back to the community by participating in a volunteer event.",
    },
    {
        title: "Spring Concert",
        description: "Enjoy live music performances by student and professional artists.",
    },
];
// console.log(document.body.children[0]);

// document.body.children[1].innerText="Welcome Week";
// document.body.children[1].children[1].innerText="Kick off the year with fun activities and events for new students.";

// const idd=window.document.getElementsByTagName("h2");
// idd[1].innerHTML="Welcome Week";

//  const elements = document.getElementsByClassName("card2");
//  console.log(elements);
//  elements[0].innerHTML="jgfjyhfv"

// const cards=document.getElementsByClassName('card');
// for(let i=0;i<events.length;i++){
//     const card=cards[i+1];
//     const heading=card.getElementsByTagName('h2');
//     heading[0].innerText=events[i].title;

// }
// const card1=cards[0];
// const heading=card1.getElementsByTagName('h2');
// heading[0].innerText=events[0].title;
const headings=document.getElementsByTagName('h2');
const paras=document.getElementsByTagName('p');
for(let i=0;i<events.length;i++){
    headings[i].innerText=events[i].title;

paras[i].innerText=events[i].description;
}

 const newCard = document.createElement("div");
 const newElement = document.createElement("h2");
 newCard.appendChild(newElement);
 const newElement2 = document.createElement("p");

  newCard.append(newElement1);
  const click=()=>{
    
  }


