var autoDetectRenderer = PIXI.autoDetectRenderer,
	Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    Sprite = PIXI.Sprite;

var stage = new Container(),
    renderer = autoDetectRenderer(window.innerWidth, window.innerHeight/2);
	
document.body.appendChild(renderer.view);

renderer.backgroundColor = 0x061639;

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();

var monster;
var roundBox;

loader
  .add("images/metalslug_monster39x40.png")
  .load(setup);

//Tell the `renderer` to `render` the `stage`

function setup() {

	monster = new Sprite(resources["images/metalslug_monster39x40.png"].texture);

	stage.addChild(monster);

	monster.x = window.innerWidth/2;
	monster.y = window.innerHeight/2;
	monster.anchor.x = 0.5;
	monster.anchor.y = 0.5;

	renderer.render(stage);
	
	var circle = new Graphics();
	circle.beginFill(0x9966FF);
	circle.drawCircle(0, 0, 32);
	circle.endFill();
	circle.x = 64;
	circle.y = 130;
	
	stage.addChild(circle);

	
	
	roundBox = new Graphics();
	roundBox.lineStyle(4, 0x99CCFF, 1);
	roundBox.beginFill(0xFF9933);
	roundBox.drawRoundedRect(0, 0, 84, 36, 10)
	roundBox.endFill();
	roundBox.x = 48;
	roundBox.y = 190;
	
	stage.addChild(roundBox);

	
	
	
	
	gameLoop();
}

function gameLoop(){

  //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);

  //Move the cat 1 pixel per frame
  // monster.x += 1;
  monster.rotation += 0.03;
  
  //Render the stage
  renderer.render(stage);
}
