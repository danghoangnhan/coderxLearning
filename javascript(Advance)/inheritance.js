class Animal {
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log("eating");
    }
}

class Bird extends Animal{
    fly(){
        console.log(" flying");
    }
}
class parrito extends Bird{
    speak(){
        console.log(" speaking");
    }
}
const bird = new parrito('thọng');

class Animal2 {
    constructor(name){
    this.name = name;
    }
}
Animal2.prototype.eat = function(){
    console.log("eating");
}
function Bird2(name) {
    Animal2.apply(this,arguments);
}
Bird2.prototype = new Animal2();