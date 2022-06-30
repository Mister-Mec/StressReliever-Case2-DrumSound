var numberOfNotes = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfNotes; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", reflexAction);

  function reflexAction() {
    var buttonInnerhtml = this.innerHTML;
    

    switch (buttonInnerhtml) {
      case "w":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      case "a":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "s":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "d":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "k":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "l":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      default:
        console.log(buttonInnerhtml);
        break;
    }
    animationFading(buttonInnerhtml);
  }
}
/*
A Note to be remembered :
  when ever we are inputing the evnet in a function then many parameters come which you can see in mdn references 
  one of them is the key which results in the key on presses in the keyboard as i am pressing now 😂😂.


  imp : notice that here we applied event listner to the whole document, instead of any class or tag or id.

  This "event" in add event listner tells that which event called the add event listner;
        ^
        |
        |____ this is wrong as it is not eent that calls the function in addeventlistner but the object that 
               experiences any activity or what we call event
*/
document.addEventListener("keypress", function (event) {
  var thePressedkey = event.key;
  switch (thePressedkey) {
    case "w":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "a":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(buttonInnerhtml);
      break;
  }

  animationFading(event.key);
});

function animationFading(keyInput){
  var active = document.querySelector("."+ keyInput);
  active.classList.add("pressed");
  setTimeout(function (){
    active.classList.remove("pressed");
  }, 100 );
}











// alert("I am selected");

// playing sound
