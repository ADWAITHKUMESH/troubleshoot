class paper{
constructor(x,y){
var options = {
    isStatic:true,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.body=Bodies.circle(x,y,50,[options]);
World.add(world,this.body);

}
display(){
fill("red");
    

}















}