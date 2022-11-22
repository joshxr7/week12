const clickMebutton = document.querySelector(".click_me");


function clickReaction () {

    alert("You Clicked!");

    

}

clickMebutton.addEventListener("Click", clickReaction );



function changeBGColour ()

{
        // document.body.style.backgroundColor = "pink";
        document.body.classList.add("pink");

    

}
// clickMebutton.removeEventListener("Click", clickReaction);

clickMebutton.addEventListener("Click",changeBGColour)

function changeText()
{

clickMebutton.textContent = "Clicked";

if (clickMebutton.textContent === "Click Me!"){
    clickMebutton.textContent = "Clicked"
}

if (clickMebutton.textContent === "Clicked"){

    clickMebutton,textContent = "Click Me!"

}

}

clickMebutton.addEventListener("Click", changeText)