const options = {
    headers: {
       " x-rapidapi-host" : " youtube-v2.p.rapidapi.com",
      " x-rapidapi-key ": "a8b88c83d8msh13fcfbcfdeafabbp16cf6ajsnbe95150ba1d0",
        
    },
};

const showYoutubeCards = (data) =>{
    console.log(data);
    const {videos} = data;

    for(let i=0; i<videos.length; i++){
        const card = document.createElement('div');
        card.className = "search-result-card";
        card.innerHTML = 

        <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCgs3kt08JL2BJuEcjc4IMPB9i9NA">
        <div class="right-part">

        
        <p>   Sigma Web Development Course - Web Development Tutorials in Hindi</p>
          <p class="channel-name">codeWithHarry</p>
          <p>Your First HTML Website | Sigma Web Development Course - Tutorial #2 · 28:31</p>  </div>
    </div>

    }
};


const getData = async() => {
    try{
        const res= await fetch ("https://youtube-v2.p.rapidapi.com/search/?query=bobby%20lee&lang=en&order_by=this_month&country=us",options);
        const dataObj= await res.json();
        showYoutubeCards(dataObj);
    }
    catch (err) {
        alert(err.message);
    }
    
};
getData();