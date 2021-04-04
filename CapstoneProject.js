// Greet player with fun message.
var readlineSync = require('readline-sync');
var helloMessage = readlineSync.question("Welcome to the city block. Whats your name by the way? ");

var beginGame = `I can tell your new here ${helloMessage}. Lets take a walk. *Press Enter* `
console.log (beginGame)

const menuOptions = ['Walk','Exit','Print'];
const enemies = ['Jilly Bob', 'Mrs. B', 'AC The Cold One','C-Rack','CuJo','B B Queen'];
const specialItems = ['RedBull','Motor Scooter','Slingshot','$1000','Pair of Jordans'];
var reward = [];
let playerHealth = 50;
let rewardPickup = specialItems[Math.floor(Math.random()*specialItems.length)];

function gamePlay(){
    const playerPower = Math.floor(Math.random() * (25 - 10 + 15) + 15);
    const enemyAppearing = enemies[Math.floor(Math.random() * enemies.length)];
    let enemyHealth = 50;
    const enemyPower = Math.floor(Math.random() * (20 - 15 + 10) + 15);

    const menu = readlineSync.keyInSelect(menuOptions, 'What would you like to do?');

    if (menuOptions[menu] == 'Exit'){
        return playerHealth = 0;
        
    }   else if(menuOptions[menu] == 'Print'){
        console.log(helloMessage + ': \n' + playerHealth + '\nItems: ' + reward);
    }   else if (menuOptions[menu] === 'Walk'){
            let movement = Math.random();
            if (movement <= .5){
                console.log('Walking down the city block ...');
            } else if (movement >= .5){
                console.log(enemyAppearing + ' is running towards you. ');

                while(enemyHealth > 0 && playerHealth > 0) {

                    const player = readlineSync.question('What are you going to do? press "a" to attack or press "r" to run: ');

                    switch (player){
                        case 'r':
                            const run = Math.random();
                            if (run < .5){
                                console.log('When you went to run ' + enemyAppearing + 'attacked you with ' + enemyPower + ' knife power');

                            } 
                            else{
                                console.log('You got away');
                                break;
                            }
                        case 'a':
                            enemyHealth -= playerPower;
                            console.log ( 'You punched ' + enemyAppearing + ' with '  + playerPower + ' g forces of punching power');

                            playerHealth -= enemyPower;
                            console.log( enemyAppearing + ' just attacked you with ' + enemyPower + ' knife power');

                            if (enemyHealth <= 0){
                                console.log('You knocked out ' + enemyAppearing + ' \n' + enemyAppearing + ' left: ' + rewardPickup);
                                let pickUp = Math.random();
                                if (pickUp <= .5){
                                    reward.push(rewardPickup);

                                }
                            }
                                else if (playerHealth <= 0){
                                    console.log(enemyAppearing + ' put you in the hospital. Never come back to the city block again.');
                                }
                            }

                    }
                }


            }
    }
    while (playerHealth > 0){
        playerRestore = function(){
            playerAlive = true;
            playerHealth = 50
        };
        playerRestore();
        gamePlay();
    }
