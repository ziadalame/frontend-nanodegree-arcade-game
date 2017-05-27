# FrontEnd NanoDegree Arcade Game 

In this game you have a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once a the player collides with an enemy, the game is reset and the player moves back to the start square. Once the player reaches the water the game is won.

## Game tactics

- To start playing, headover to: [Arcade Game](https://ziadalame.github.io/frontend-nanodegree-arcade-game/)
- Players can move via the arrow keys only
- Players should reach the water to be able to score 1 point
- Players advance to the next level every 5 score points
- Enemy speed increases every level
- Enemies increase every 2 levels or 10 score points

## Game looks

![Game Screenshot](https://github.com/ziadalame/frontend-nanodegree-arcade-game/blob/master/images/game-screeshot.png?raw=true)


## Getting Started

```
$ git clone git@github.com:ziadalame/frontend-nanodegree-arcade-game.git
$ cd frontend-nanodegree-arcade-game
$ open index.html
```

### Prerequisites

You need to have a browser that supports javascript. (Google Chrome, Mozilla Firefox, OSX Safari, etc.)
You do not need any preinstalled libraries.

## TODO

##### Step 1
- [x] The Enemy function, which initiates the Enemy by:
  - [x] Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
  - [x] Setting the Enemy initial location (you need to implement)
  - [x] Setting the Enemy speed (you need to implement)
- [x] The update method for the Enemy
  - [x] Updates the Enemy location (you need to implement)
  - [x] Handles collision with the Player (you need to implement)
  - [x] You can add your own Enemy methods as needed

##### Step 2
- [x] The Player function, which initiates the Player by:
  - [x] Loading the image by setting this.sprite to the appropriate image in the image folder (use the code from the Enemy function as an example on how to do that)
  - [x] Setting the Player initial location
- [x] The update method for the Player (can be similar to the one for the Enemy)
- [x] The render method for the Player (use the code from the render method for the Enemy)
- [x] The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
  - [x] Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
  - [x] Recall that the player cannot move off screen (so you will need to check for that and handle appropriately).
  - [x] If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).
- [x] You can add your own Player methods as needed.

##### Step 3
- [x] Creating a new Player object
- [x] Creating several new Enemies objects and placing them in an array called allEnemies

##### Step 4
- [x] Add score of user
- [x] Add level of user based on score
- [x] Make game harder as user progresses

## Authors

* **Ziad Alame** - *Customization and final points* - [ZiadAlame](https://github.com/ziadalame)
* **Udacity Team** - *Initial work* - [Udacity](https://github.com/udacity)

## License

This project is licensed under the MIT License

## Acknowledgments

* Thank you for Udacity for the awesome code base
* Thank you [zenorocha](https://github.com/zenorocha) for the readme starter