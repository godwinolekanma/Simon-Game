var allButton = $(".btn")
var allButton = $(".btn")
var buttonPicksList = [];
var userClick = [];

function gameStart(){
    $(document).one("keypress", function(event){
        $("h1").text("Level 1");
        var randomPick = Math.floor(Math.random() * allButton.length);
        var key = allButton[randomPick].id
        buttonPicksList.push(key)
        playSound(key);
        buttonFlash(key)
    })
}

function gameMech(holder){
    // $("h1").text("Level " + count);
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
    for (var i = 0; i <= buttonPicksList.length; i++){
        if (userClick[i] === buttonPicksList[i]){
            $("h1").text("Level " + i);
            if (buttonPicksList.length === userClick.length){
                userClick = []
                setTimeout(function(){
                    gameMech(buttonPicksList.length)
                }, 1000)      
            }        
        }
        else if (userClick[i] !== buttonPicksList[i]){

            userClick = [];
            buttonPicksList = [];
            playSound("wrong");
            gameStart();
        }
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
console.log(userClick)
console.log(buttonPicksList)
