const images = [
	{
		url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'White and Black Long Fur Cat',
	},
	{
		url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
	},
	{
		url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Group of Horses Running',
	},
];


// Напиши скрипт для создания галереи изображений по массиву данных.В HTML есть список ul.gallery.

// 	Используй массив объектов images для создания элементов < img > вложенных в < li >.Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const galleryList = document.querySelector(".gallery")

galleryList.style.display = "flex";
galleryList.style.gap = "10px";
galleryList.style.justifyContent = "space-between";
galleryList.style.listStyle = "none";
galleryList.style.margin = "0";
galleryList.style.padding = "0";


const galleryItem = images.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" style="display: block; max-width: 100%; height: 100%;"></li>\n`).join('');

galleryList.insertAdjacentHTML("beforeend", galleryItem)