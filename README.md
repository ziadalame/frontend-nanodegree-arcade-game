# FrontEnd NanoDegree Arcade Game 

In this game you have a Player and Enemies (Bugs). The goal of the player is to reach the water, without colliding into any one of the enemies. The player can move left, right, up and down. The enemies move in varying speeds on the paved block portion of the scene. Once a the player collides with an enemy, the game is reset and the player moves back to the start square. Once the player reaches the water the game is won.

## Getting Started

```
git clone git@github.com:ziadalame/frontend-nanodegree-arcade-game.git
cd frontend-nanodegree-arcade-game
open index.html
```

### Prerequisites

You need to have a browser that supports javascript. (Google Chrome, Mozilla Firefox, OSX Safari, etc.)
You do not need any preinstalled libraries.

## TODO

##### Step 1
[ ] The Enemy function, which initiates the Enemy by:
    [ ] Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
    [ ] Setting the Enemy initial location (you need to implement)
    [ ] Setting the Enemy speed (you need to implement)
[ ] The update method for the Enemy
    [ ] Updates the Enemy location (you need to implement)
    [ ] Handles collision with the Player (you need to implement)
    [ ] You can add your own Enemy methods as needed

##### Step 2
[ ] The Player function, which initiates the Player by:
    [ ] Loading the image by setting this.sprite to the appropriate image in the image folder (use the code from the Enemy function as an example on how to do that)
    [ ] Setting the Player initial location
[ ] The update method for the Player (can be similar to the one for the Enemy)
[ ] The render method for the Player (use the code from the render method for the Enemy)
[ ] The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
    [ ] Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
    [ ] Recall that the player cannot move off screen (so you will need to check for that and handle appropriately).
    [ ] If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).
[ ] You can add your own Player methods as needed.

##### Step 3
[ ] Creating a new Player object
[ ] Creating several new Enemies objects and placing them in an array called allEnemies

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Ziad Alame** - *Customization and final points* - [ZiadAlame](https://github.com/ziadalame)
* **Udacity Team** - *Initial work* - [Udacity](https://github.com/udacity)

## License

This project is licensed under the MIT License

## Acknowledgments

* Thank you for Udacity for the awesome code base
* Thank you [zenorocha](https://github.com/zenorocha) for the readme starter