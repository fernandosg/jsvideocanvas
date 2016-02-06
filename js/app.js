var video=document.getElementById("monitor");
var videoCanvas=document.getElementById("videoCanvas");
var videoContext=videoCanvas.getContext("2d");

videoContext.translate(320, 0);
videoContext.scale(-1, 1);
var layer2Canvas = document.getElementById( 'layer2' );
var layer2Context = layer2Canvas.getContext( '2d' );
var buttons=[];
buttons.push(new ImageCanvas("../assets/images/SquareRed.png",32,32,320 - 96 - 30,10));
buttons.push(new ImageCanvas("../assets/images/SquareGreen.png",32,32,320 - 64 - 20,10));
buttons.push(new ImageCanvas("../assets/images/SquareBlue.png",32,32,320 - 32 - 10,10));
var buttons_length=buttons.length;
function ImageCanvas(src,width,height,x,y){
	this.element=new Image();
	this.element.src=src;
	this.information={
		width:width,
		height:height,
		x:x,
		y:y
	}
}

function animate(){
	requestAnimationFrame(animate);
	render();
}

animate();

function render(){
	if(video.readyState===video.HAVE_ENOUGH_DATA){
		videoContext.drawImage(video,0,0,videoCanvas.width,videoCanvas.height);
		for(var i=0;i<buttons_length;i++)
			layer2Context.drawImage(buttons[i].element,buttons[i].information.x,buttons[i].information.y,buttons[i].information.width,buttons[i].information.height);
	}
}