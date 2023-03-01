function getLastDayOfMonth(year, month) {
    let date = new Date(year, month, 28);
    let last = date.getDate();

    while (date.getMonth() == month) {
        last += 1;
        date.setDate(last);
    }

    return last - 1;
}

console.log(getLastDayOfMonth(2012, 1));