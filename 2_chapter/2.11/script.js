const userRole = prompt("Кто там?", '');

if (userRole === 'Админ') {
    const password = prompt('Пароль?', '');

    if (password === 'Я главный') {
        alert('Здравствуйте!');
    } else if (password === '' || password === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (userRole === '' || userRole === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}