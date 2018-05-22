

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