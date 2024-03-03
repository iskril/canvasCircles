const canvas = document.querySelector('canvas');
const bodyBG = document.querySelector('body');
const c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let randomColor = c.fillStyle = getRandRGB();
bodyBG.addEventListener('click', () => {
    bodyBG.style.background = getRandRGB();
    randomColor = c.fillStyle = getRandRGB();
    randomColor = c.strokeStyle = getRandRGB();
})
// function Random Color
function getRandRGB() {
    o = Math.round;
    r = Math.random;
    s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}
//
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle;
        c.stroke();
        c.fill();
        c.lineWidth = 5; // толщина обводки
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}
let circle = new Circle(200, 200, 3, 3, 330);

let circleArray = []

for (let i = 0; i < 40; i++) { // 50 - количество кругов
    let radius = 100; // радиус круга
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 2; // скорость по горизонтали
    let dy = (Math.random() - 0.5) * 2; // скорость по вертикали
    
    circleArray.push(new Circle(x, y, dx, dy, radius));
}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
};
animate();