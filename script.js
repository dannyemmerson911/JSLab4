(function() {

    var startButton = document.getElementById("startGame");
    var attackButton = document.getElementById("attackButton");
    var healButton = document.getElementById("healButton");
    var quitButton = document.getElementById("quitButton");
    var playerHealthBar = document.getElementById("playerHealth");
    var healBar = document.getElementById("healsRemaining");
    var totalWins = document.getElementById("wins"); 
    var grantHealthBar = document.getElementById("grantHealth");
    var messageEl = document.getElementById("message");
    var player = document.getElementById("playerName");
    var hidePage = document.getElementById("restOfPage");
    var command = document.getElementById("commandCenter");

    
    
    var character = {
        name: null,
        health: 40,
        healsRemaining: 2,
        wins: 0, 
        generateAttackDamage: function(){
            return Math.floor((Math.random() * 3) + 1);
        },
        heal: function(){
            this.healsRemaining--;
            return Math.floor((Math.random() * 10) + 1);
        }

    }

    var grant = {
        name: "Grant the Almighty Chicken of Death",
        health: 10,
        generateAttackDamage: function(){
            return Math.floor((Math.random() * 5) + 1);
        }
    }

    
    startButton.onclick = function(){
        hidePage.style.display = "block";
        player.innerHTML = prompt("What shall I call you?");
        startButton.style.display = "none";
    };
  

    attackButton.onclick = function() {
        if(character.health > 0 && character.wins < 5){
            character.health -= character.generateAttackDamage();
            grant.health -= grant.generateAttackDamage();
            updateDisplay();
            updateMessage(player.innerHTML + " has " + character.health + " hitpoints remaining. " + grant.name + " has " + grant.health + " hitpoints remaining.");
        };
        if(grant.health <= 0){
            character.wins++;
            updateMessage(player.innerHTML + " now has " + character.wins + " wins. That's not quite 5. You need 5. Keep battling!");
            grant.health = 10; 
            updateDisplay();

        };
        if(character.wins === 5){
            updateMessage(player.innerHTML +" has won the battle!! Hey, great job dude (or dudette). I'm proud of you.");
            command.style.display = "none";
        };
        if(character.health <= 0){
            updateMessage("The Chicken of Death claims yet another poor soul!! You lose!");
            command.style.display = "none"; 
        }

};

    healButton.onclick = function(){
        if(character.healsRemaining > 0){
            character.health += character.heal();
            updateMessage("It hits you right in the heals! " + player.innerHTML + " has " + character.healsRemaining + " heal burgers remaining.");
            updateDisplay();        
        } else if(character.healsRemaining === 0){
            updateMessage("Nice try. You have no more heal burgers remaining. Battle on!");
        };
    };

    quitButton.onclick = function(){
        updateMessage("What are you? Chicken?! Game over");
        command.style.display = "none";

    }
    
    function updateDisplay() {
        playerHealthBar.value = character.health;
        grantHealthBar.value = grant.health; 
        healBar.value = character.healsRemaining;
        totalWins.value = character.wins;


    };

    function updateMessage(newMessage) {
        messageEl.innerText = newMessage;
    };


})();

