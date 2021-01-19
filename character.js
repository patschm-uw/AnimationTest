/*class Link {
	constructor(game, x, y){
		this.game = game;
		this.x = x;
		this.y = y;
		
		this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/Minish.png");
		
		this.animations = [];
		this.animations.push(new Animator(this.spritesheet, 6, 1760, 32, 42, 7, .1, 0, false, true));
		//                                                x, y, width, height, frames, speed, spacing, flip, loop
	};
	
	update(){
		
	};
	
	draw(ctx) {
		//ctx.drawImage(this.spritesheet,0,0,1208,3735);
		this.animations[0].drawFrame(this.game.clockTick, ctx, this.x, this.y, 3.5)
	};
};

class Ezlo {
	constructor(game,x,y) {
		this.game = game;
		this.x = x;
		this.y = y;
		
		this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/Minish.png");
		
		this.animations = [];
		this.animations.push(new Animator(this.spritesheet, 2, 32, 67, 49, 6, .18, 0, false, true));
		//                                                x, y, width, height, frames, speed, spacing, flip, loop
	};
	
	update() {
	
	};
	
	draw(ctx) {
		//ctx.drawImage(this.spritesheet, 0, 0, 100, 100);
		this.animations[0].drawFrame(this.game.clockTick, ctx, this.x, this.y, 3.5);
	};
}; */

class Arachnus {
	constructor(game,x,y) {
		this.game = game;
		this.x = x;
		this.y = y;
		
		this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/Arachnus.png");
		
		this.animations = [];
		this.animations.push(new Animator(this.spritesheet, 1, 670, 88, 78, 25, .1, 2, false, true));
		//                                               x, y, width, height, frames, speed, spacing, flip, loop
	};
	
	update() {
	
	};
	
	draw(ctx) {
		//ctx.drawImage(this.spritesheet, 0, 0, 100, 100);
		this.animations[0].drawFrame(this.game.clockTick, ctx, this.x, this.y, 3.5);
	};
};

class Shell {
	constructor(game,x,y) {
		this.game = game;
		this.x = x;
		this.y = y;
		
		this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/Arachnus.png");
		
		this.animations = [];
		this.animations.push(new Animator(this.spritesheet, 0, 755, 90, 70, 25, .1, 0, false, true));
		//                                                x, y, width, height, frames, speed, spacing, flip, loop
	};
	
	update() {
	
	};
	
	draw(ctx) {
		//ctx.drawImage(this.spritesheet, 0, 0, 100, 100);
		this.animations[0].drawFrame(this.game.clockTick, ctx, this.x, this.y, 3.5);
	};
};
