const readlineSync = require('readline-sync');
const nameOfPlayer = readlineSync.question("What is your name?");

var welcomeWords = `Enter ${nameOfPlayer}! Welcome to my Escape Room! Ha HA Ha!!!`

console.log(welcomeWords);

var playerAlive = true;
var hasKey = false;

while (playerAlive == true){
    
    const menuChoices = readlineSync.keyIn (` Choose 1 to Force your hand into the hole \n Choose 2 to Find the key \n Choose 3 to Open the door`, {limit: '$<1-3>'});
    if (menuChoices == 1){
        console.log(`Tragedy ${nameOfPlayer}! A saw sprung from the wall and chopped your head off. Game Over.`);
        playerAlive = false;
    }
    else if (menuChoices == 2 && hasKey == false){
        console.log ( `${nameOfPlayer} you found the key! Proceed to the door to open it!`);
        hasKey = true;
    }
    else if (menuChoices == 2 && hasKey == true){
        console.log ( `${nameOfPlayer} you already have the key. The door is waiting to be opened.`);
    }
    else if (menuChoices == 3 && hasKey == false){
        console.log (`${nameOfPlayer} find the key first so you can escape. Avoid the hole at all cost!`);
    }
    else if (menuChoices == 3 && hasKey == true){
        console.log (`Congratulations ${nameOfPlayer}. You escaped with your life this time. Next time you won't be so lucky`);
        playerAlive = false;
    }
    
}
