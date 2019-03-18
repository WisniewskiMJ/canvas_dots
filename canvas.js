let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let r = 50;
let x = Math.floor(Math.random() * ((innerWidth - r) - (0  + r))) + (0 + r);
//let dx = (Math.random() - 0.5)*20;
let y = Math.floor(Math.random() * ((innerHeight - r) - (0  +r))) + (0 + r);
//let dy = (Math.random() - 0.5)*20;

function Circle(x, y) {
	this.r = Math.floor(Math.random()*(50-5)) + 5;
    this.x = x;
	this.y = y; 
    
    // using modulo 
	// this.dx = Math.floor(((Math.random()*100)%20)+5);
    
    this.dx = Math.floor(Math.random()*(15+15))-15;
	this.dy = Math.floor(Math.random()*(15+15))-15;
	
	this.alpha = 1;
    this.beta = 1;
    
	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
		c.strokeStyle = `rgba(0 ,0 ,255 , ${this.alpha})`;
		c.lineWidth = 4;
        //c.fillStyle = `rgba(255, 255, 255, ${this.beta})`;
		c.stroke();
        //c.fill();
	};
	this.update = function() {
		this.x += this.dx;
		this.y += this.dy;
		if (this.x > innerWidth - this.r || this.x < this.r) {
			this.dx = -this.dx;
		}
		if (this.y > innerHeight - this.r || this.y < this.r) {
			this.dy = -this.dy;
			}
        //this.alpha -= 0.005;
        //this.beta -= 0.005;
        //this.r += 0.01;
        this.draw();
	}
};

let circleArray = [];

for (i = 0; i < 25; i++) {
    circleArray.push(new Circle(x,y));
} 

function animate () {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	 
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();

