const audioMap = {
  z: "./assets/sounds/tom-1.mp3",
  q: "./assets/sounds/tom-2.mp3",
  s: "./assets/sounds/tom-3.mp3",
  d: "./assets/sounds/tom-4.mp3",
  j: "./assets/sounds/snare.mp3",
  k: "./assets/sounds/crash.mp3",
  l: "./assets/sounds/kick-bass.mp3",
};

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", (e) => {
    const btnInnerHTML = e.currentTarget.innerHTML;
    switchDrum(btnInnerHTML);
    btnAnimation(btnInnerHTML);
  });
}

document.addEventListener("keydown", (e) => {
  const key = e.key;
  switchDrum(key);
  btnAnimation(key);
});

function switchDrum(key) {
  const audio = new Audio(audioMap[key]);
  audio.play();
}

function btnAnimation(key) {
  var activebtn = document.querySelector("." + key);
  activebtn.classList.add("pressed");
  console.log(activebtn);
  setTimeout(() => {
    activebtn.classList.remove("pressed");
  }, 120);
}
