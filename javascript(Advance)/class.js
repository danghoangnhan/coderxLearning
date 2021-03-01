function Mouse(name){
    this.name = name;
}
Mouse.prototype.run = function(){
    console.log(`${this.name} is runing`);
}
const mouse1 = new Mouse('Mickey');
mouse1.run();

class mouse{
    constructor(name){
        this.name = name;
    }
    run(){
        console.log(`${this.name} is runing`);
    }
}
const mouse2 = new mouse('Micjey2');
mouse2.run();