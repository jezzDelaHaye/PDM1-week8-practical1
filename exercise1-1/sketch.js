let sound1;
let sound2;
let sound3;
let currentSound , amp;
let amps = [];

function preload()
{
    
    sound1 = loadSound('assets/Sound1.wav');
    sound2 = loadSound('assets/Sound2.wav');
    sound3 = loadSound('assets/Sound3.wav');
    
}

function setup()
{
    createCanvas(600,600);
    amp = new p5.Amplitude();

}

function draw()
{
    background(255);
    rectMode(CENTER)
    ellipse(width/2,height/2, (amp.getLevel() * 500))
}

function keyPressed()
{
    
    
    if (key === '1')
    {
        currentSound = sound1;
    }
    if (key === '2')
    {
        currentSound = sound2;
    } 
    if (key === '3')
    {
        currentSound = sound3; 
    }

    currentSound.stop();
    amp.setInput(currentSound);
    currentSound.play();
}

function mousePressed()
{
    currentSound.stop();
}

