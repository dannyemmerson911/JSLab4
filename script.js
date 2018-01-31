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

    
    
    var character = {
        name: null,
        health: 40,
        healsRemaining: 2,
        wins: 0, 
        generateAttackDamage: function(){
            return Math.floor((Math.random() * 3) + 1);
        },
        heal: function(){
            this.health += Math.floor((Math.random() * 10) + 1);
            this.healsRemaining--;
        }

    }

    var grant = {
        name: "Grant the Almighty Chicken of Death",
        health: 10,
        generateAttackDamage: function(){
            return Math.floor((Math.random() * 5) + 1);
        }
    }

    
  
  

    attackButton.onclick = function() {
        if(character.health > 0 && character.wins < 5){
            character.health -= character.generateAttackDamage();
            grant.health -= grant.generateAttackDamage();
            updateDisplay();
            updateMessage(character.name + " has " + character.health + " hitpoints remaining. " + grant.name + " has " + grant.health + " hitpoints remaining.");
        };
        if(grant.health <= 0){
            character.wins++;
            updateMessage(character.name + " now has " + character.wins + " wins. That's not quite 5. You need 5. Keep battling!");
            grant.health = 10; 
            updateDisplay();

        };
        if(character.wins === 5){
            updateMessage(character.name +" has won the battle!! Honestly...I can't believe it. The odds were realllly stacked against you. Good job.");
        };
};

    healButton.onclick = function(){
        if(character.healsRemaining > 0){
            character.health += character.heal();
            //character.health += character.heal();
            updateDisplay();
            updateMessage("It hits you right in the heals! " + character.name + " has " + healsRemaining + " heal burgers remaining.");
        }
        else if(character.healsRemaining === 0){
            updateMessage("Nice try. You have no more heal burgers remaining. Battle on!");
        };
    };
    
    function updateDisplay() {
        console.log(character.health);
        playerHealthBar.value = character.health;
        grantHealthBar.value = grant.health; 
        healBar.value = character.healsRemaining;
        totalWins.value = character.wins;


    };

    function updateMessage(newMessage) {
        messageEl.innerText = newMessage;
    };


})();

