let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function getSummary(sal) {
    let summ = 0;

    for (person in sal) {
        summ += sal[person];
    }

    return summ;
}

console.log(getSummary(salaries));