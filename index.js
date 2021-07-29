// Detecting button press

for (var i =0; i < document.querySelectorAll(".drum").length  ; i ++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    
    });
}
// Detecting key press

    document.addEventListener("keypress", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });

function makeSound(key) {
    switch (key) {
        case "c":
            var crash = new Audio('sounds/c.mp3');
            crash.play();
            break;

        case "k":
            var kick = new Audio('sounds/k.mp3');
            kick.play();
            break;

        case "s":
            var smash = new Audio('sounds/s.mp3');
            smash.play();
            break;

        case "a":
            var tom1 = new Audio('sounds/t1.mp3');
            tom1.play();
            break;

        case "b":
            var tom2 = new Audio('sounds/t2.mp3');
            tom2.play();
            break;

        case "d":
            var tom3 = new Audio('sounds/t3.mp3');
            tom3.play();
            break;

        case "e":
            var tom4 = new Audio('sounds/t4.mp3');
            tom4.play();
            break;
        

        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(keyword) {
    var a = document.querySelector("."+keyword);
    a.classList.add("pressed");
    setTimeout(function(){
        a.classList.remove("pressed"); 
    },200)
}
