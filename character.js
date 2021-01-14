class Link {
	constructor(game, x, y){
		this.game = game;
		this.x = x;
		this.y = y;
		
		this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/LinkWalk.png");
		
		this.animations = [];
		this.animations.push(new Animator(this.spritesheet, 2, 32, 30, 30, 6, .18, 0, false, true));
	};
	
	update(){
		
	};
	
	draw(ctx) {
		//ctx.drawImage(this.spritesheet,0,0,204*2,115*2);
		this.animations[0].drawFrame(this.game.clockTick, ctx, this.x, this.y, 3.5)
	};
};