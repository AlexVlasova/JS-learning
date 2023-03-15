const myObj = {
    name: 'Ann',
};

function A() {
    return myObj;
}
function B() {
    return myObj;
}

let a = new A();
let b = new B();

console.log( a == b ); // true