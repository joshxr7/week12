const clickMebutton = document.querySelector(".click_me");

function clickReaction() {
  alert("You Clicked!");
}

clickMebutton.addEventListener("click", clickReaction);


function changeBGColour() {
  document.body.style.backgroundColor = "pink";
  // document.body.classList.add("pink");
}
// clickMebutton.removeEventListener("Click", clickReaction);

clickMebutton.addEventListener("click", changeBGColour);

function changeText() {
  clickMebutton.textContent = "Clicked";

  if (clickMebutton.textContent === "Click Me!") {
    clickMebutton.textContent = "Clicked";
  }

  if (clickMebutton.textContent === "Clicked") {
    clickMebutton, (textContent = "Click Me!");
  }
}

clickMebutton.addEventListener("click", changeText);

function createAddButton()
{
    const purpleButton = document.createElement("button");
    purpleButton.textContent = "Purple";
    purpleButton.addEventListener("mouseover", changeBGGreen);
    document.body.appendChild(purpleButton)

}
clickMebutton.addEventListener("click", createAddButton)




function createPara()
{
    const paragraph = document.createElement("p");
    paragraph.textContent = "Hello There";
    paragraph.addEventListener("mouseover", changeBGGreen);
    document.body.appendChild(paragraph)

}

clickMebutton.addEventListener("click", createPara)


function changeBGGreen(event) 
{


    event.target.classList.add("green-background");


}

clickMebutton.addEventListener("click", changeBGGreen);