// click Event Listener
for (var i = 0; i < document.querySelectorAll(".set button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("mousedown", function() {
    keyPress(this.innerText);
    buttonAnimation(this.innerText);
  });
  document.querySelectorAll("button")[i].addEventListener("mouseup", function() {
    document.querySelector("."+this.innerText).classList.remove("pressed");
  });
}

document.addEventListener("keydown", function(e){
  keyPress(e.key);
  buttonAnimation(e.key);
});

document.addEventListener("keyup", function(e){
  document.querySelector("."+e.key).classList.remove("pressed");
});

// function to play audio for event listeners
function keyPress(k){
  switch (k) {
    case "w":
      var playAudio = new Audio("sounds/tom-1.mp3")
      playAudio.play();
      break;
    case "a":
      var playAudio = new Audio("sounds/tom-2.mp3")
      playAudio.play();
      break;
    case "s":
      var playAudio = new Audio("sounds/tom-3.mp3")
      playAudio.play();
      break;
    case "d":
      var playAudio = new Audio("sounds/tom-4.mp3")
      playAudio.play();
      break;
    case "j":
      var playAudio = new Audio("sounds/snare.mp3")
      playAudio.play();
      break;
    case "k":
      var playAudio = new Audio("sounds/crash.mp3")
      playAudio.play();
      break;
    case "l":
      var playAudio = new Audio("sounds/kick-bass.mp3")
      playAudio.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(key){
  document.querySelector("."+key).classList.add("pressed");
}
