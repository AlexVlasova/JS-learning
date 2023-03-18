let table = document.body.firstElementChild;

for (let i = 0; i < table.ariaRowSpan.length; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
}

