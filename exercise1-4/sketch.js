let mic, ftt;

function setup() 
{
    createCanvas(600, 600);
    fft = new p5.FFT(0.8,512);
    mic = new p5.AudioIn();
    getAudioContext().suspend();
    mic.start();
    fft.setInput(mic);
}

function draw() 
{
    createCanvas(600,600);
    drawCharacter();
    console.log(mic.getLevel())
}

function drawCharacter()
{
    //body
    ellipse(width/2, height/2, 100, 200)

    //head
    circle(width/2, (height/2 - 140) - (mic.getLevel()*2), 80)

    //legs
    ellipse(width/2 + 30, height/2 + 180, 50, 190)
    ellipse(width/2 - 30, height/2 + 180, 50, 190)

    //arms
    ellipse(width/2 + 60, height/2 + 15, 50, 190)
    ellipse(width/2 - 60, height/2 + 15, 50, 190)

}

function mouseClicked()
{
    userStartAudio();
}
