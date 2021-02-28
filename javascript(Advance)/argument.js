const names = ['Thanh','Trang','Thuy'];

for(let i in names)    console.log(names[i]);

const names2 = {
    0: 'Thanh',
    1:'Trang',
    2:'Thuy',
length: 3
};
for (let i =0 ;i<names2.length;i++) console.log(names2[i]);

function sum (){
    const number = Array.from(arguments);
    return number.reduce(function (sum,numb){
        return sum + numb;
    },0);
}
console.log(sum(1,2,3,4,5,6,7,8,9));
