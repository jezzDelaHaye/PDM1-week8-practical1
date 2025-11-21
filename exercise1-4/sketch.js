function drawCharacter()
{
    //headbody
    ellipse(mouseX,mouseY,100,200)
    circle(mouseX,mouseY - 140,80)

    //legs
    ellipse(mouseX + 30, mouseY + 180,50,190)
    ellipse(mouseX - 30 ,mouseY + 180,50,190)

    //arms
    ellipse(mouseX+60,mouseY + 15,50,190)
    ellipse(mouseX-40,mouseY + 15,50,190)

}
