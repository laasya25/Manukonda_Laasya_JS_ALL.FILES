let cards=[
    {
        image:"https://archziner.com/wp-content/uploads/2018/12/curly-warm-brown-fur-on-a-labradoodle-puppy-sitting-on-a-white-surface-with-one-of-its-paws-raised-up-cute-puppy-photo-e1543682718467.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://archziner.com/wp-content/uploads/2018/12/curly-warm-brown-fur-on-a-labradoodle-puppy-sitting-on-a-white-surface-with-one-of-its-paws-raised-up-cute-puppy-photo-e1543682718467.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://wallpapershome.com/images/wallpapers/rose-1080x1920-4k-hd-wallpaper-pink-spring-flower-10354.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://wallpapershome.com/images/wallpapers/rose-1080x1920-4k-hd-wallpaper-pink-spring-flower-10354.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/1483718705/GettyImages-163120954_0_0.jpg?itok=BLDo5-qI",
        value:3,
        status:"closed"

    },
    {
        image:"https://cdn-img.health.com/sites/default/files/styles/medium_16_9/public/1483718705/GettyImages-163120954_0_0.jpg?itok=BLDo5-qI",
        value:3,
        status:"closed"

    },
    {
        image:"https://tailandfur.com/wp-content/uploads/2014/11/Beautiful-Bird-Pictures-11.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://tailandfur.com/wp-content/uploads/2014/11/Beautiful-Bird-Pictures-11.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"http://3.bp.blogspot.com/-7PmuJbm4dY8/UduwdcoKuSI/AAAAAAAAAw8/24e8xWpv2hs/s1600/1004599_640996889244002_116258747_n.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"http://3.bp.blogspot.com/-7PmuJbm4dY8/UduwdcoKuSI/AAAAAAAAAw8/24e8xWpv2hs/s1600/1004599_640996889244002_116258747_n.jpg",
        value:5,
        status:"closed"
    },

  
]

let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;

function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;

}

displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reste after one guess 
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{

            alert("game over");
            location.reload();
        }
    
    }

    displayCards(cards);

}













