//call
function greeting(){
    console.log(`Hi! My name is ${this.name}, i'm ${this.age} year olds.`);
}
var obj ={
    name: 'daniel',
    age: 10
}
greeting.call(obj);