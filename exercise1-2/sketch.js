let x = 50;
let y = 50;
let speedX = 3;
let speedY = 3;
let sfx;

function preload()
{
    sfx = loadSound('assets/Sound1.wav')
}
function setup() 
{
    createCanvas(600, 400);
}

function draw() 
{
    background(255);
    circle(x, y, 100);
    if (x < 50 || x > width - 50) 
    {
        speedX *= -1;
        sfx.play();
    }
    if (y < 50 || y > height - 50) 
    {
        speedY *= -1;
        sfx.play();    
    }
    x += speedX;
    y += speedY;
}
