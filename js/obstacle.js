class Obstacle  {
    constructor(game, x)   {
        this.game = game;
        this.spriteWidth = 110;
        this.spriteHeight = 150;
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
        this.x = x;
        this.y = Math.random() * (this.game.height - this.scaledHeight);
        this.speedY = Math.random() < 0.5 ? -1 * this.game.ratio : 1 * this.game.ratio;
        this.markedForDeletion = false;
    }

    update()    {
        this.x -= this.game.speed;
        this.y += this.speedY;
        if(this.y <= 0 || this.y >= this.game.height - this.scaledHeight)   {
            this.speedY *= -1;    
        }

        if(this.isOffScreen())  {
            this.markedForDeletion = true;
            this.game.obstacles = this.game.obstacles.filter(obstacle => !obstacle.markedForDeletion);
            (this.game.obstacles.length) 
            if (this.game.obstacles.leght <= 0) this.game.gameOver = true;
                this.game.score++;
        }
    }

    draw()  {
        this.game.ctx.fillRect(this.x, this.y, this.scaledWidth, this.scaledHeight);
    }

    resize()    {
        this.scaledWidth = this.spriteWidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
    }

    isOffScreen()   {
        return this.x < -this.scaledWidth;
    }
}