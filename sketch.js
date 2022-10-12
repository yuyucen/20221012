function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255) //框線顏色
  noFill() //不要填滿顏色
  rectMode(CENTER)
  


for(var j=0;j<(height/50);j++){
  for(var i=0;i<(width/50);i=i+1)//i++ ==> i=i+1
  {
    stroke("#ffbe0b")
    ellipse(25+(i*50),25+(j*50),50+mouseX/10)
    stroke("#57cc99")
    rect(25+(i*50),25+(j*50),50+mouseY/5)
    stroke(255) //框線顏色
    ellipse(50+(i*50),50+(j*50),25)
    rect(25+(i*50),25+(j*50),35)
    rect(50+(i*50),50+(j*50),15)
  }
} 
}
