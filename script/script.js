const clickMebutton = document.querySelector(".click_me");
console.log(clickMebutton)

function clickReaction () {

    alert("You Clicked!");

    

}

clickMebutton.addEventListener("Click", clickReaction, {once:true});



// clickMebutton.removeEventListener("Click", clickReaction);

