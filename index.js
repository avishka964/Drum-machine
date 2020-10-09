var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    soundEffect(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);     
  });
}

document.addEventListener("keydown", function (e) {
  soundEffect(e.key);
  buttonAnimation(e.key);
  clickButton(e.key);

});

function soundEffect(key) {
  switch (key) {
    case "a":
      var cymbal = new Audio("sounds/cymbal.mp3");
      cymbal.play();
      break;
    case "s":
      var bass = new Audio("sounds/bass.mp3");
      bass.play();
      break;
    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "f":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "g":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "h":
      var floorTom = new Audio("sounds/floor-tom.mp3");
      floorTom.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("hit");
  setTimeout(function () {
    activeButton.classList.remove("hit");
  }, 100);
}

function clickButton(hit) {

    if (hit === 'a') {    
    document.getElementById("kit-name").innerHTML = "CYMBAL";
  } else if(hit === 's') {
    document.getElementById("kit-name").innerHTML = "BASS";    
  } else if(hit === 'd') {
    document.getElementById("kit-name").innerHTML = "SNARE";    
  } else if(hit === 'f') {
    document.getElementById("kit-name").innerHTML = "TOM 1";    
  } else if(hit === 'g') {
    document.getElementById("kit-name").innerHTML = "TOM 2";  
  } else if(hit=== 'h') {
    document.getElementById("kit-name").innerHTML = "FLOOR TOM";
  } else{      
    document.getElementById("kit-name").innerHTML = "Hit";
  }
}



