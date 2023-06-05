function setup() {
    createCanvas(600, 400);
    frameRate(60);
    //inspo: https://www.freepik.es/vector-premium/arte-abstraccion-geometrica_31489441.htm
  
    noStroke();
  
    //primera linea//
    //primer cuad fondo
    push();
    fill("#D9ACF5");
    rect(0, 0, 200, 200);
    pop();
  
    //circulos
    push();
    fill("#4E31AA");
    ellipse(100, 60, 90, 90);
    ellipse(100, 60, 90, 90);
    fill("#645CBB");
    ellipse(100, 80, 80, 80);
    fill("#A084DC");
    ellipse(100, 100, 70, 70);
    fill("#BFACE2");
    ellipse(100, 120, 60, 60);
    fill("#EBC7E6");
    ellipse(100, 140, 50, 50);
    pop();
  
    //seg cuad fondo
    push();
    fill("#301E67");
    rect(200, 0, 100, 200);
    fill("#645CBB");
    rect(300, 0, 100, 200);
    pop();
  
    //corazon
    fill("#645CBB");
    bezier(300, 70, 300, 10, 150, 0, 300, 160);
    fill("#301E67");
    bezier(300, 70, 300, 10, 450, 0, 300, 160);
  
    //tercer cuad
    fill("#82AAE3");
    rect(400, 0, 200, 200);
  
    //dib
    fill("#BFEAF5");
    rect(500, 0, 100, 100);
    fill("#91D8E4");
    rect(400, 100, 100, 100);
    fill("#EAFDFC");
    ellipse(500, 100, 50, 50);
  
    //segunda linea
  
    //primer cuad
    fill("#E8A0BF");
    rect(0, 200, 200, 200);
    //primer cuad
    noStroke();
    fill("#242F9B");
    beginShape();
    vertex(100, 300);
    vertex(50, 310);
    vertex(20, 270);
    vertex(20, 230);
    vertex(60, 230);
    vertex(100, 260);
    endShape(CLOSE);
  
    noStroke();
    fill("#2F8F9D");
    beginShape();
    vertex(100, 300);
    vertex(150, 310);
    vertex(180, 270);
    vertex(180, 230);
    vertex(140, 230);
    vertex(100, 260);
    endShape(CLOSE);
  
    noStroke();
    fill("#533E85");
    beginShape();
    vertex(50, 310);
    vertex(100, 300);
    vertex(150, 310);
    vertex(100, 370);
    endShape(CLOSE);
  
    //seg cuad
    fill("#4E31AA");
    rect(200, 200, 200, 200);
  
    //tercer cuad
    fill("#B9EDDD");
    rect(400, 200, 200, 200);
  
  //   stroke("#4E31AA")
  //   beginShape();
  //   curveVertex(500, 370);
  //   curveVertex(430, 280);
  //   curveVertex(440, 220);
  //   curveVertex(500, 260);
  //   curveVertex(560, 220);
  //   endShape(CLOSE);
    
  }
  function draw() {
    console.log("X: " + mouseX + " Y:" + mouseY);
  
    noStroke();
    //segunda linea
    //cuad 2
    //ojo rojo
    if (!mouseIsPressed) {
      fill(240);
      bezier(210, 300, 250, 230, 350, 230, 390, 300);
      bezier(210, 300, 250, 370, 350, 370, 390, 300);
      fill("#BFA2DB");
      ellipse(300, 300, 90, 90);
    }
  
    if (mouseIsPressed) {
      push();
      background(25);
      stroke(0);
      fill(255);
      beginShape();
      vertex(300, 200);
      vertex(380, 150);
      vertex(300, 20);
      vertex(220, 150);
      endShape(CLOSE);
  
      triangle(300, 20, 510, 180, 380, 150);
      triangle(380, 150, 510, 180, 510, 300);
      triangle(510, 180, 560, 250, 510, 300);
  
      triangle(300, 20, 220, 150, 80, 180);
      triangle(80, 180, 220, 150, 80, 300);
      triangle(40, 250, 80, 180, 80, 300);
  
      beginShape();
      vertex(40, 250);
      vertex(80, 300);
      vertex(70, 370);
      vertex(75, 400);
      vertex(60, 400);
      vertex(65, 360);
      endShape(CLOSE);
  
      beginShape();
      vertex(510, 300);
      vertex(560, 250);
      vertex(535, 360);
      vertex(540, 400);
      vertex(525, 400);
      vertex(530, 370);
      endShape(CLOSE);
  
      beginShape();
      vertex(75, 400);
      vertex(70, 370);
      vertex(80, 300);
      vertex(220, 150);
      vertex(300, 200);
      vertex(380, 150);
      vertex(510, 300);
      vertex(530, 370);
      vertex(525, 400);
      endShape(CLOSE);
  
      beginShape();
      vertex(80, 180);
      vertex(100, 150);
      vertex(140, 100);
      vertex(180, 70);
      vertex(260, 30);
      vertex(300, 20);
      endShape(CLOSE);
  
      beginShape();
      vertex(300, 20);
      vertex(340, 30);
      vertex(420, 70);
      vertex(460, 100);
      vertex(500, 150);
      vertex(510, 180);
      endShape(CLOSE);
      pop();
    }
    if (mouseIsPressed) {
      stroke(250);
      fill(0);
      bezier(210, 300, 250, 230, 350, 230, 390, 300);
      bezier(210, 300, 250, 370, 350, 370, 390, 300);
      fill("red");
      ellipse(300, 300, 90, 90);
    }
    if (mouseIsPressed) {
      push();
      stroke(255, 20, 0);
      strokeWeight(2);
      noFill();
      rect(random(0, 500), random(0, 600), 100, 50);
      pop();
  
      push();
      stroke(255, 20, 0);
      strokeWeight(3);
      fill(0);
      rect(random(0, 500), random(0, 600), 100, 50);
  
      pop();
    }
  
    //pincel
    // fill("#070A52");
    // ellipse(mouseX, mouseY, 5, 5);
  }
  