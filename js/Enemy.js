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