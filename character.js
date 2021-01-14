class Link {
	constructor(game, x, y){
		this.game = game;
		this.x = x;
		this.y = y;
		
		this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/LinkWalk.png");
		
		this.Animator = new Animator(this.spritesheet, 50, 50, 50, 75, 6, .33, 16, true, true);
	};
	
	loadAnimations() {
		this.animations[0] = new Animator(this.spritesheet, 100, 0, 10, 10, 1, 0.33, 14, false, true);
	};
	
	update(){
		
	};
	
	draw(ctx) {
		this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2)
	};
};