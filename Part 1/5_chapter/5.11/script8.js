function formatDate(date) {
    let now = Date.now();

    let diff = now - date;

    if (diff < 1000) {
        return 'прямо сейчас';
    } else if (diff < 60000) {
        return  `${Math.round(diff/1000)} сек. назад`;
    } else if (diff < 60 * 60 * 1000) {
        return `${Math.round(diff/1000/60)} мин. назад`;
    } else {
        let d = [
            '0' + date.getDate(),
            '0' + (date.getMonth() + 1),
            '' + date.getFullYear(),
            '0' + date.getHours(),
            '0' + date.getMinutes()
        ].map(component => component.slice(-2));

        return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
    }
}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );