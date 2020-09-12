class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility - 255;
    
  }
display(){
  console.log(this.body.speed);
  if(this.body.speed < 3){
    super.display();
  }
  else{
    World.remove(world,this.body)
    push();
    this.Visibilty = this.Visibility - 5
    tint(255,this.Visibilty);
    image(this.image, this.body.position.x, this.body.position.y, 50,50)
    pop();
    
  }
} 

};

//normal cows: evil cows roam
//evil cows roam
//evil cows roam
//HELLLLLLLLLLLLLLP!!!!!!!!!  aaaaaaaaaaaaaaaaaa!!
// *crunch crunch* *lips smacking* *yum! yum!*
//normal cows: sorry you got eaten by the evil cow :o(