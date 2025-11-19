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
    drawSquares();
    
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

function drawSquares()
{
    let squares = 
    {
        sx: 10, 
        sy: height/2,
        size: 60,
        lh: 175

    }

    for( let i = 0; i < 5; i++)
    {
        if (i === 0)
        {
            rect(squares.sx,squares.sy,squares.size)
            line(squares.sx,squares.lh,(squares.sx + squares.size),squares.lh)
        }
        else 
        {
            rect((squares.sx + i*80),squares.sy,squares.size);
            line((squares.sx + i*80),squares.lh,(squares.sx + i*80) + squares.size,squares.lh);
        }

        
    }
}



