let table = document.getElementById('bagua-table');
let isEdit = false;
let currentTd;

table.addEventListener('click', event => {
    let td = event.target.closest('td');
    if (td && !isEdit) {
        createTextArea(td);
    }
});

function createTextArea(td) {
    isEdit = true;
    currentTd = td;
    let textarea = document.createElement('textarea');
    textarea.value = td.innerHTML;
    textarea.focus();
    td.replaceWith(textarea);

    createBtns(textarea);
}

function createBtns(textarea) {
    let okBtn = document.createElement('button');
    okBtn.textContent = "OK";
    let cancelBtn = document.createElement('button');
    cancelBtn.textContent = "CANCEL";

    table.append(okBtn, cancelBtn);

    okBtn.style.top = textarea.offsetTop + textarea.offsetHeight + 2 + 'px';
    okBtn.style.left = textarea.offsetLeft + 'px';
    cancelBtn.style.top = textarea.offsetTop + textarea.offsetHeight + 2 + 'px';
    cancelBtn.style.left = textarea.offsetLeft + okBtn.offsetWidth + 2 + 'px';

    okBtn.addEventListener('click', event => {
        okBtn.remove();
        cancelBtn.remove();
        currentTd.innerHTML = textarea.value;
        textarea.replaceWith(currentTd);
        isEdit = false;
    });

    cancelBtn.addEventListener('click', () => {
        okBtn.remove();
        cancelBtn.remove();
        textarea.replaceWith(currentTd);
        isEdit = false;
    });
}