const clickMebutton = document.querySelector(".click_me");
console.log(clickMebutton)

function reaction () {

    alert("You Clicked!");

}

clickMebutton.addEventListener("Click", reaction);
