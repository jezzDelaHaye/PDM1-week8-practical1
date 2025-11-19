let osc;
function setup()
{
    createCanvas(400, 300);
    osc = new p5.SinOsc();
}
function preload()
{

}
function draw()
{
    square(10,height/2,60)
    square(90,height/2,60)
    square(170,height/2,60)
    square(250,height/2,60)
    square(330,height/2,60)
}

function mousePressed() 
{
    if (mouseX > 10 && mouseX < 70 && mouseY > height/2 && mouseY < height/2 + 60) 
    {
        osc.freq(100);
        osc.start();
    }

    if (mouseX > 90 && mouseX < 150 && mouseY > height/2 && mouseY < height/2 + 60) 
    {
        osc.freq(200);
        osc.start();
    }

    if (mouseX > 170 && mouseX < 230 && mouseY > height/2 && mouseY < height/2 + 60) 
    {
        osc.freq(300);
        osc.start();
    }

    if (mouseX > 250 && mouseX < 310 && mouseY > height/2 && mouseY < height/2 + 60) 
    {
        osc.freq(400);
        osc.start();
    }

    if (mouseX > 330 && mouseX < 390 && mouseY > height/2 && mouseY < height/2 + 60) 
    {
        osc.freq(500);
        osc.start();
    }
}



