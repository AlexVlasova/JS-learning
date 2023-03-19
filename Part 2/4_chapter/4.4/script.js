let modal = document.createElement('div');
modal.className = "modal-container hidden";
modal.innerHTML =  ` <div id="prompt-form-container">
        <form id="prompt-form">
        <div id="prompt-message"></div>
        <input name="text" type="text" autofocus>
        <input type="submit" value="Ok">
        <input type="button" name="cancel" value="Отмена">
        </form>
    </div>`;
document.body.append(modal);

function showPrompt(html, callback) {
    modal.querySelector('#prompt-message').innerHTML = html;
    modal.classList.remove('hidden');
    modal.querySelector('input[name="text"]').focus();
    console.log(document.activeElement);

    document.body.style.overflowY = 'hidden';

    modal.addEventListener('submit', (event) => {
        event.preventDefault();
        let value = modal.querySelector('input[name="text"]').value;
        if (value == '') return;
        modal.classList.add('hidden');
        document.body.style.overflowY = '';
        callback(value);
    });

    modal.addEventListener('click', (event) => {
        if (event.target.name == 'cancel') {
            modal.classList.add('hidden');
            document.body.style.overflowY = '';
            callback(null);
        }
    });

    modal.addEventListener('keydown', (event) => {
        if (event.key == 'Escape') {
            modal.classList.add('hidden');
            document.body.style.overflowY = '';
            callback(null);
        }
    });

    let form = document.querySelector('form');
    let lastElem = form.elements[form.elements.length - 1];
    let firstElem = form.elements[0];

    lastElem.onkeydown = function(e) {
      if (e.key == 'Tab' && !e.shiftKey) {
        firstElem.focus();
        return false;
      }
    };

    firstElem.onkeydown = function(e) {
      if (e.key == 'Tab' && e.shiftKey) {
        lastElem.focus();
        return false;
      }
    };
}


document.querySelector('.open-modal').addEventListener('click', () => {
    showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
        alert(value);
    });
});
