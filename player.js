class Player {
    constructor(game) {
        this.game = game;
        this.x = 20;
        this.y = 0;
        this.spriteHeight = 200;
        this.spriteWidth = 200;
        this.width;
        this.height;
        this.speedY = 0;
    }
    
    draw() {
        this.game.ctx.fillRect(this.x, this.y, this.height, this.width)
    }
        update () {
            this.y += this.speedY;
            if(this.y < this.game.height - this.height) {
                this.y += this.game.gravity;
            }
            
            if(this.y >= this.game.height - this.height)
                this.y =this.game.height - this.height
        }

        resize() {
            this.width = this.spriteWidth * this.game.ratio;
            this.height = this.spriteHeight * this.game.ratio;
        }
}