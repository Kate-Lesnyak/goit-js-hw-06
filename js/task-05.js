// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input), подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

const userName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

userName.addEventListener('input', onUserNameInput);

function onUserNameInput() {
	userName.value ? outputName.textContent = userName.value : outputName.textContent = "Anonymous"
};