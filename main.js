var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Sprites/Minish.png");
ASSET_MANAGER.queueDownload("./Sprites/Arachnus.png");

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);
	gameEngine.addEntity(new Shell(gameEngine, 45, 93));
	gameEngine.addEntity(new Arachnus(gameEngine, 50, 50));
	//gameEngine.addEntity(new Link(gameEngine, 600, 180));
	//gameEngine.addEntity(new Ezlo(gameEngine, 50, 50));
	gameEngine.start();
});
