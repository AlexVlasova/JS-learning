let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys()); // Создается псевдомассив, итерируемый объект

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");