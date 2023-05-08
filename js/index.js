for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", (e) => {
    var btnInnerHTML = e.currentTarget.innerHTML;

    switch (btnInnerHTML) {
      case "w":
        var audio = new Audio("./assets/sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("./assets/sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("./assets/sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("./assets/sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("./assets/sounds/snare.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("./assets/sounds/crash.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("./assets/sounds/kick-bass.mp3");
        audio.play();
        break;
      default:
        break;
        console.log("Invalid input type");
    }
  });
}
