let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let map = new Map();

    arr.forEach(elem => {
        let key = elem.toLowerCase().split('').sort().join('');

        map.set(key, elem);
    });

    let res = [];

    for (elem of map.values()) {
        res.push(elem);
    }

    return res;
}

console.log(aclean(arr));