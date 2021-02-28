//arrow function expression
//fat arrow
//=> ->
var sum = (a,b)=>{
    return a+b;
}
sum(4,8);
var square = x => x*x;
square(5);

var arr =[1,2,3];
var varsquare =arr.map(x=>x*x);
console.log(varsquare);

var a = {
    name: "AAA",
    run: function(){
        var run2 =()=>{
            console.log(this.name);
        }
        run2();
    }
}
a.run();
//arrowfunction doesn't have context
var b = {
    foo: 'bar',
    run: function(){
        setTimeout(()=>{
            console.log(this.foo);
        },2000);
    }
};
b.run();