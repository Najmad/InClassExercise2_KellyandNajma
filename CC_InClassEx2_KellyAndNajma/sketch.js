var rawTxt;
var x = 50;
var clock = 0;


function preload() {
  rawTxt = loadStrings("data/peterRabbit_text.txt");
  wolf = loadImage("images/wolf.png");
  
}

function setup() {
  createCanvas(600,600);
  console.log(rawTxt[0])
}

function draw() {
  image(wolf, 50, 50, 100, 100);
  text(rawTxt);
  textSize(16);
  
    
  //for(){
    for (var i = 0; i <= clock; i++) {
      if(rawTxt[i] == "[Illustration]") {
        continue;
      }
      
      var wolves = rawTxt[i].replace(/[R,r]abbits/g, "wolves");
      wolves = wolves.replace(/[R,r]abbit/g, "Wolf");
      wolves = wolves.replace("bunnies", "pups");
      if(i <= 5){
        x = 175;
      }
      else{
        x = 50;
      }
      
      text(wolves, x, 50+i*20);
    } // end for
  //} // end for
  
  if(frameCount%50 == 0){
    clock += 1;
  } 
  if(clock >= 24){
    clock = 24;
  }
  
  console.log(clock);
  
  
  
  
  
}