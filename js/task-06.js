// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', onInputTextBlur);

function onInputTextBlur() {
	if (inputText.value.length !== Number(inputText.dataset.length)) {
		inputText.classList.add('invalid');
	} else {
		inputText.classList.replace('invalid', 'valid');
	}
}