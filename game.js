class Game {
    constructor(canvas, context){
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height
        this.baseHeight = 720;
        this.ratio = this.height.height / this.baseHeight
        this.player = new Player(this);

        this.resize(window.innerwidth, window.innerheight)

        window.addEventListener('resize', e=> {
            this.resize(e.currentTarget.innerheight, e.currentTarget.innerwidth);
        })
    }

        resize(width, height)   {
            this.canvas.height = height;
            this.canvas.width = width;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.ctx.fillStyle = '#5995F2';
            this.ratio = this.height / this.baseHeight;
            this.player.resize();
            console.log(this.height, this.baseHeight, this.ratio)

            
    }

    render() {
        this.player.draw
        this.player.update();
    }
}

window.addEventListener('load', function() {
    const canvas = document-getElementById('game-layout');
    const ctx = canvas-getContext('2d');
    canvas.width = 720;
    canvas.height = 720;
    
    const game = new Game (canvas,etc);
    function animate () {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        game.render();
        requestAnimationFrame(animated);
    }
    this.requestAnimationFrame(animate);
});