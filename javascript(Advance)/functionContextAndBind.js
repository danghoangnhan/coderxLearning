var mouse = {
    name: 'Mickey',
    sayHi: function(){
        console.log('Hi,my name is',this.name);
    }
}
var cat = {
    name: 'Tom'
}
var say = mouse.sayHi.bind(mouse);
say();

function run (cb){
    console.log('run...');
    cb();
}
run(mouse.sayHi);