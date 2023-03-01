let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let mx = null;
    let mxName = null;

    for (let [key, value] of Object.entries(salaries)) {
        if (value > mx) {
            mx = value;
            mxName = key;
        }
    }

    return mxName;
}

console.log(topSalary(salaries));