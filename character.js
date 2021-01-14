class Link {
	constructor(game, x, y){
		this.game = game;
		this.x = x;
		this.y = y;
		
		this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/LinkWalk.png");
		
		this.animations = [];
		this.animations.push(new Animator(this.spritesheet, 50, 50, 50, 75, 6, .33, 16, true, true));
	};
	
	update(){
		
	};
	
	draw(ctx) {
		this.animations[0].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2)
	};
};