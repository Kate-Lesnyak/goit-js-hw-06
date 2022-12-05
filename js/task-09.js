function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.
// 	Для генерации случайного цвета используй функцию getRandomHexColor.

const body = document.querySelector('body');
const btnChangeBgColor = document.querySelector('.change-color');
const valueBgColor = document.querySelector('.color');

btnChangeBgColor.addEventListener('click', onBtnChangeBgColorClick);

function onBtnChangeBgColorClick() {
	const bgColor = getRandomHexColor();
	body.style.backgroundColor = bgColor;
	valueBgColor.textContent = bgColor;
}