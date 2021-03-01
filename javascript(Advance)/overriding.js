class CoffeMachine {
    makeCoffee(){
        console.log(" makeCoffeeing");
    }
}
class SpecialCoffeeMachine extends CoffeMachine {
    makeCoffee(cb){
        console.log(" makeCoffeeing and doing something");
        cb();
    }
}
const coffeMachine = new SpecialCoffeeMachine();
coffeMachine.makeCoffee(function(){
    console.log("call the boss");
})