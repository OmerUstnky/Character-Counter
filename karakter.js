const textarea = document.querySelector('textArea');
const totalCounter = document.getElementById('totalCounter');
const remainingCounter = document.getElementById('remainigCounter');

textarea.addEventListener('keyup', fonk);

function fonk() {
    totalCounter.textContent = textarea.value.length;
    remainingCounter.textContent = (50 - textarea.value.length);
}
fonk();