

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", (e) => {
    e.currentTarget.style.color = "white";
  });
}
// var audio = new Audio("./assets/sounds/tom-1.mp3");
//     audio.play();
