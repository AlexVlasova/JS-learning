let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650

function sumSalaries(sals) {
    let res = 0;

    for (let sal of Object.values(sals)) {
        res += sal;
    }

    return res;
}

