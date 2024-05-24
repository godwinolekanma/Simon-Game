var allButton = $(".btn")
var allButton = $(".btn")
var buttonPicksList = [];
var userClick = [];
var count = 0;

function gameStart(){
    $(".restart").one("click", function(){
        $("h1").text("Level 1");
        gameMech();
    });
   
}

function gameMech(){
    count++
    $("h1").text("Level " + count);
    userClick = []
    randomPick = Math.floor(Math.random() * allButton.length);
    key = allButton[randomPick].id;
    buttonPicksList.push(key);
    playSound(key)
    buttonFlash(key)
}


$(".btn").on("click", function(){
    buttonClicked = this.id;
    userClick.push(buttonClicked);  
    playSound(buttonClicked)
    buttonFlash(buttonClicked)
    console.log(userClick)
    console.log(buttonPicksList)
    console.log(userClick[userClick.length - 1])
    console.log(buttonPicksList[userClick.length - 1])
    if (userClick[userClick.length - 1] === buttonPicksList[userClick.length - 1]){
        if (buttonPicksList.length === userClick.length){
            setTimeout(function(){
                gameMech(buttonPicksList.length)
            }, 1000)      
        }        
    }
    else{
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        }, 100)
        count=0;
        buttonPicksList = [];
        userClick = [];
        playSound("wrong");
        $("h1").text("Game Over, Please Press Start Button");
        gameStart();
    }

});


function playSound(key){
    switch (key){
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;
    
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;
    
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
    
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        
        case "wrong":
            var wrong = new Audio("sounds/wrong.mp3");
            wrong.play();
            break;
        
        default:
            console.log(key);
    }
};

function buttonFlash(key){
    activeButton = $("." + key)
    activeButton.addClass("pressed");
    setTimeout(function(){
        activeButton.removeClass("pressed")
    }, 100)
}


gameStart()
