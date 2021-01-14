class Link {
	constructor(game, x, y){
		Object.assign(this, {game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/LinkWalk.png");
		
		this.animations = [];
		this.loadAnimations();
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