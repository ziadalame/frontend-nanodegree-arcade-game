'use strict;'

// As defined row heigth and coloumn width in the engine file
var BLOCK = {
    width: 101,
    height: 83
};

// Offset to keep objects in the center of the block
var offset = 10;
// Initial score and lebel of user
var level = 1, score = 0;
// Initial speed of enemy
var speedLevelParameter = 100;
// Used to manage response to user input
var haultInput = false;
// An variable to hold an enemy object
var enemy;

// Enemies our player must avoid
var Enemy = function () {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // Get starting coordinates for enemy
    this.x = 0;
    this.y = (Math.floor(Math.random() * 3) + 1) * BLOCK.height - offset;

    // Set enemy speed 
    this.speed = Math.floor(Math.random() * speedLevelParameter * (1 + level * 0.2)) + 100;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // setting enemy movement
    this.x += this.speed * dt;

    // Check if enemy has reached end of line
    if (this.x > ctx.canvas.width) {
        // Add enemy on the left again
        this.x = 0;
        this.y = (Math.floor(Math.random() * 3) + 1) * BLOCK.height - offset;
        // Update speed to match level
        this.speed = Math.floor(Math.random() * speedLevelParameter * (1 + level * 0.2)) + 100;
    }

    var collision = Math.abs(player.x - this.x);
    if (collision <= BLOCK.width / 2 && this.y === player.y) {
        //resets player location when running into enemy
        player.reset();
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.sprite = 'images/char-boy.png';
    // Set the initial loaction of the user
    this.x = BLOCK.width * 2;
    this.y = BLOCK.height * 5 - offset;
};

Player.prototype.update = function (dt) { };

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (input) {
    // check which input is being passed.
    if (!haultInput) {
        switch (input) {
            case 'left':
                if ((this.x - BLOCK.width) >= 0) {
                    this.x -= BLOCK.width;
                }
                break;
            case 'up':
                if ((this.y - BLOCK.height) >= -1 * offset) {
                    this.y -= BLOCK.height;
                }
                if (this.y < 0) {
                    // stop handling input to avoid score increase from multiple clicks
                    haultInput = true;
                    // Wait some time to show the user that he reached to the water before reset
                    setTimeout(function () {
                        player.recordSuccess();
                        // resume input processing
                        haultInput = false;
                    }, 750);
                }
                break;
            case 'right':
                if ((this.x + BLOCK.width) <= (BLOCK.width * 4)) {
                    this.x += BLOCK.width;
                }
                break;
            case 'down':
                if ((this.y + BLOCK.height) <= BLOCK.height * 5.5) {
                    this.y += BLOCK.height;
                }
                break;
        }
    }
};

// Reset player to initial position
Player.prototype.reset = function () {
    this.x = BLOCK.width * 2;
    this.y = BLOCK.height * 5 - offset;
};

// Update score, level and gaming effects like speed and number of enemies
Player.prototype.recordSuccess = function () {
    // Increase Score
    document.getElementById('scoreValue').innerHTML = ++score;
    // Update Level every 5 times user score
    if (score % 5 === 0 && score > 0) {
        document.getElementById('levelValue').innerHTML = ++level;
        // Increase enemy speed
        speedLevelParameter += 50;
    }
    // Add new enemy every 10 times user scores
    if (score % 10 === 0) {
        // Add new enemy
        enemy = new Enemy();
        allEnemies.push(enemy);
    }
    // Take player back to initial position to start again
    this.reset();
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// Create a player
var player = new Player();
// Create array of enemise
var allEnemies = [];
// Populate array with enemise
var createEnemies = function (numberOfEnemies) {
    for (var l = 0; l < numberOfEnemies; l++) {
        enemy = new Enemy();
        allEnemies.push(enemy);
    }
}(3);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
