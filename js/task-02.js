const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент < li >.Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию в список ul#ingredients.


const ingredientsList = document.getElementById('ingredients');

const ingredientsItems = ingredients.map((ingredient) => {
	const ingredientEl = document.createElement('li');
	ingredientEl.textContent = ingredient;
	ingredientEl.classList.add('item');
	return ingredientEl;
})

ingredientsList.append(...ingredientsItems);
