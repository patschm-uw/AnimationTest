class Link {
	constructor(game, x, y){
		Object.assign(this, {game, x, y});
		
		this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/LinkWalk.png");
	};
	
	update(){
		
	};
	
	draw(ctx){
		ctx.drawImage(this.spritesheet, 50, 50);
	}
};