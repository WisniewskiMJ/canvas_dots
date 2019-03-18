let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');
/*
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100,100,100,100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(300,100,100,100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(400,200,100,100);
c.fillRect(100,300,100,100);

c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle = "blue";
c.stroke();

for (let i = 0; i < 200; i++) {
	let x = Math.random() * window.innerWidth;
	let y = Math.random() * window.innerHeight;
	c.beginPath();
	c.arc(x, y, 30, 0, Math.PI * 2, false);
	c.strokeStyle = "purple"
	c.stroke();
}
*/
let r = 50;
let x = Math.floor(Math.random() * ((innerWidth - r) - (0  + r))) + (0 + r);
//let dx = (Math.random() - 0.5)*20;
let y = Math.floor(Math.random() * ((innerHeight - r) - (0  +r))) + (0 + r);
//let dy = (Math.random() - 0.5)*20;

function Circle(x, y) {
	this.r = Math.floor(Math.random()*(50-5)) + 5;
    this.x = x;
	this.y = y; 
    
    //sposob z modulo jak robic ujemne?
	//this.dx = Math.floor(((Math.random()*100)%20)+5);
    
    this.dx = Math.floor(Math.random()*(15+15))-15;
	this.dy = Math.floor(Math.random()*(15+15))-15;
	
	this.alpha = 1;
    
	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
		c.strokeStyle = `rgba(0,0,255,${this.alpha})`;
		c.lineWidth = 4;
		c.stroke();
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
        this.alpha -= 0.005;
        this.r += 0.01;
        this.draw();
	}
};

let circle = new Circle(x, y);
console.log("x = " + circle.dx + "  y = " +  circle.dy)
let circle1 = new Circle(x, y);
console.log("x = " + circle1.dx + "  y = " +  circle1.dy)
let circle2 = new Circle(x, y);
console.log("x = " + circle2.dx + "  y = " +  circle2.dy)
let circle3 = new Circle(x, y);
console.log("x = " + circle3.dx + "  y = " +  circle3.dy)
let circle4 = new Circle(x, y);
console.log("x = " + circle4.dx + "  y = " +  circle4.dy)
let circle5 = new Circle(x, y);
console.log("x = " + circle5.dx + "  y = " +  circle5.dy)
let circle6 = new Circle(x, y);
console.log("x = " + circle6.dx + "  y = " +  circle6.dy)
let circle7 = new Circle(x, y);
console.log("x = " + circle7.dx + "  y = " +  circle7.dy)
let circle8 = new Circle(x, y);
console.log("x = " + circle8.dx + "  y = " +  circle8.dy)
let circle9 = new Circle(x, y);
console.log("x = " + circle9.dx + "  y = " +  circle9.dy)
let circle10 = new Circle(x, y);
console.log("x = " + circle10.dx + "  y = " +  circle10.dy)
let circle11 = new Circle(x, y);
console.log("x = " + circle11.dx + "  y = " +  circle11.dy)






function animate () {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	
	circle.update();
	circle1.update();
	circle2.update();
	circle3.update();
	circle4.update();
	circle5.update();
	circle6.update();
	circle7.update();
	circle8.update();
	circle9.update();
	circle10.update();
	circle11.update();
/*	
	c.beginPath();
	c.arc(x, y, 30, 0, Math.PI * 2, false);
	c.strokeStyle = "blue";
	//c.fillStyle ="green";
	c.lineWidth = 4;
	//c.fill();
	c.stroke();
	x += dx;
	y += dy;
	if (x > innerWidth - 30 || x < 30) {
		dx = -dx;
	}
	if (y > innerHeight - 30 || y < 30) {
		dy = -dy;
	} */
}

animate();

