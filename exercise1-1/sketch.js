let sound1;
let sound2;
let sound3;

function preload()
{
    
    sound1 = loadSound('assets/Sound1.wav');
    sound2 = loadSound('assets/Sound2.wav');
    sound3 = loadSound('assets/Sound3.wav');
    
}

function setup()
{
    createCanvas(600,600);

}

function draw()
{
    background(0);

}

function mouseClicked()
{
    sound1.play();
}