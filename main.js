function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump= loadSound("jump.wav");
	mario_coin= loadSound("coin.wav");
	mario_gameover= loadSound("gameover.wav");
	mario_kick= loadSound("kick.wav");
	mario_die= loadSound("die.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');
	video= createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	poseNet= ml5.poseNet(video, modelLoaded);
	poseNet.on('pose',gotPoses);
}

function draw() {
	game()
}
function gotPoses(){
	if(results.length>0){
		console.log(results);
		noseX= results[0].pose.x;
		noseY= results[0].pose.y;
	}
}
function modelLoaded(){
	console.log('Model Loaded!');
}




