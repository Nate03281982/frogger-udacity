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