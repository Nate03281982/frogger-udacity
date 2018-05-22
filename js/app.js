class Enemy {

    constructor(x, y, speed) {

        this.x = x;
        this.y = y;
        this.speed = speed;
        this.sprite = 'images/enemy-bug.png';
    };

    update(dt) {
        this.x = this.x + (this.speed * dt);

        resetEnemies.call(this);
        checkCollision.call(this);
    };

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

}


// =========== Enemy class Helper functions ===============
function resetEnemies(){
    if (this.x > 500) {
        this.x = -100;
        this.speed = 100 + Math.floor(Math.random() * 666);
    }
}

// MDN check collision function
function checkCollision(){
    if (player.x < this.x + 80 &&
        player.x + 80 > this.x &&
        player.y < this.y + 60 &&
        60 + player.y > this.y) {
        player.x = 200;
        player.y = 400;
    };
}

class Player {

    constructor(x, y) {

        // Variables for the player to move along x and y axis 
        this.x = x;
        this.y = y;

        //The image of the player of horn-girl is added to the playing field 
        this.player = 'images/char-boy.png';
    };

    update(dt) {};

    render() {
        ctx.drawImage(Resources.get(this.player), this.x, this.y);
    };

    handleInput(keyPress) {

        switch (keyPress) {
            case 'left':
                this.x > 0 ? this.x -= 100 : null;
                break;
            case 'right':
                this.x < 400 ? this.x += 100 : null;
                break;
            case 'up':
                this.y > 0 ? this.y -= 83 : null;
                break;
            case 'down':
                this.y < 400 ? this.y += 83 : null;
                break;
        }

        checkForFinish.call(this);

    };

}

// =========== Player class Helper functions ===============
function checkForFinish() {
    if (this.y < 0) {
        setTimeout(() => {
            this.x = 200;
            this.y = 400;
        }, 1100);
    };
}


// =============== Instantiate Classes =======================
var player = new Player(200, 400);

var allEnemies = [];
var enemyYAxis = [60, 140, 230];
enemyYAxis.forEach((yCoord) => {
    enemy = new Enemy(0, yCoord, 200);
    allEnemies.push(enemy);
});

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