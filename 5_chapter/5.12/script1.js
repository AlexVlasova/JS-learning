let user = {
    name: "Василий Иванович",
    age: 35
};

let newObj = JSON.parse(JSON.stringify(user));
console.log(newObj);