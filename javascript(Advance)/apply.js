//apply
//call: function.call(this,param1,param2,param3,...);
//appl: function.apply(this,[param1,param2,........]);
function greeting(){
    console.log(`Hi! ${this.name}. I am ${this.age}`);
}
const cat ={
    name: 'Tom',
    age:    100
}
console.log(greeting.apply(cat));
function sum(){
    const number = Array.from(arguments);
    return number.reduce((sum,number)=>sum+number,0);

}
function average(){
    //sum 
    // sum/arguments.length
    const x = sum.apply(null,arguments);
    return x/arguments.length;
}
console.log(average(1,2,3,4,5,6));

