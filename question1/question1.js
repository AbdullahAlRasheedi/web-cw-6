// 👇🏻 قم بحل السؤال الأول هنا
let name = prompt("what is your name: ");
function sayHello(){
    if(name.length == 0){
        alert(`hello friend`);
    }
    else{
    alert(`hello ${name}`);
    }
}
sayHello()