const movies = [
{
    title: "Avengers Infinity War",
    description: "marvel movie where the super heros take on the evil Thanos",
},
{
    title: "Twisters",
    description: "movie about a tornado that touches down in Oklahoma"
},
{
    title: "Inside Out 2",
    description: "continuation of the first inside out and introduces new emotions"
}];


const menus = [
    {
    food: "Soft Pretzel",
    description: "soft and buttery pretzel with your choice of cheese dip or glaze"
    },

    {
    food: "Popcorn",
    description: "hot and buttery popcorn that goes great with a soda"
    },
    {
    food: "Soda",
    description: "fizzy drinks including coke, sprite, mr.pibb, and diet coke"
    },
    {
    food: "Hot Dog",
    description: "hot and juicy hot dog with ketchup and mustard"
    }
];

const setUp = () =>{
    $(".discount").hide()
    movieSet();
    menuSet();
    $("#login").css({border: "2px solid red"});
    $("#login").on("click", coupon)
}

const movieSet = () => {
    movies.forEach((movie)=>{
        let movieLine = $(`<div class = "movieLine"> ${movie.title} is a ${movie.description}</div>`);
        $('.movies').append(movieLine);
    })
}

const menuSet = () => {
    menus.forEach((menu)=>{
        let menuLine = $(`<div class = "movieLine"> Item: ${menu.food}</div>`);
        let descLine = $(`<div class = "descLine"> Description: ${menu.description}</div>`)
        $('.menu').append(menuLine);
        $('.menu').append(descLine);
    })
}
const coupon = () => {
    let promoCode =  $('#id_Promo').val();
    console.log(promoCode);
    if (promoCode == "20Off"){
    let coupon = $('<div class="coupon">' + '<h2>Movie Discount!</h2>' + '<p>Use code SAVE20 at theater to get 20% off your movie ticket.</p>' + '</div>'); 
    $(".discount").append(coupon);
    $(".access").hide();
    $(".discount").show();
    }
    else{
        console.log(promoCode);
        alert("Invalid code");
    }
};

$(document).ready(setUp);