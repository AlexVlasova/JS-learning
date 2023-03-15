function getSecondsToday() {
    let now = Date.now();

    let start = new Date(now);
    start.setHours(0, 0, 0, 0);

    return Math.round((now - start.getTime()) / 1000);
}

