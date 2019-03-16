let x;
let y;
let z;
let r;

let a;
let t = false;
let p = 0;

function preload(){
 x = loadImage("k1.png");
 y = loadImage("k.png");
 z = loadImage("k2.png");
 r=loadImage("r.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noSmooth();
  a = (width+ height)/10;
}

  function draw() {
    if(mouseY>height-(x.width+a)-((r.height+a)/2+a/20)&&mouseX>width/2-r.width*2&&mouseX<width/2+r.width*2&&t==false){
      t=true;
      p++;
    }else if(mouseY>height-(x.width+a)-((r.height+a)/2+a/20)&&mouseX>width/2-r.width*2&&mouseX<width/2+r.width*2){
      t=true;
   
    }else{
      t=false;
    }

    clear();
    textAlign(CENTER);
    textSize(a/1.2);
    textFont("monospace");
    text(p, width/2, height/2-a);
    imageMode(CENTER);
    if(t==true){
    image(y, width/2,height-(x.width+a)/2 , x.width+a, x.height+a);
    }else{
    image(x, width/2,height-(x.width+a)/2 , x.width+a, x.height+a);
    }
    image(z, width/2,height-(x.width+a)-(z.height+a/2)/2, z.width+a, z.height+a/2)

    image(r,mouseX,mouseY,r.width+a,r.height+a);

}