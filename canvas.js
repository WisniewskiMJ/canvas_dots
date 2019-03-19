let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

let mouse = {
  x: undefined,
  y: undefined
};
let colorArray = ["#375e7f", "#3a383d", "#805d4a", "#8d8bbc", "#f7c705"];
let circleArray = [];

window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
});
window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

function Circle(r) {
  this.r = r;
  this.rMin = r;
  this.rMax = 30;
  this.x = Math.floor(Math.random() * (innerWidth - r - (0 + r))) + (0 + r);
  this.y = Math.floor(Math.random() * (innerHeight - r - (0 + r))) + (0 + r);
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  // using modulo
  // this.dx = Math.floor(((Math.random()*100)%20)+5);

  this.dx = (Math.random() - 0.5) * 3;
  this.dy = (Math.random() - 0.5) * 3;

  this.alpha = 1;
  this.beta = 1;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);

    c.lineWidth = 4;
    c.fillStyle = this.color;

    c.fill();
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

    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50 &&
      this.r < this.rMax
    ) {
      this.r += 3;
    } else if (this.r > this.rMin) {
      this.r -= 1;
    }

    this.draw();
  };
}

function init() {
  circleArray = [];

  for (i = 0; i < 800; i++) {
    let r = Math.floor(Math.random() * 7) + 2;
    circleArray.push(new Circle(r));
  }
}
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
init();
animate();
