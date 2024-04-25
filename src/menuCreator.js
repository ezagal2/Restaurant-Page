import dish1 from './deserts/dish1.jpg';
import dish2 from './deserts/dish2.jpg';
import dish3 from './deserts/dish3.jpg';
import dish4 from './deserts/dish4.jpg';
import dish5 from './deserts/dish5.jpg';
import dish6 from './deserts/dish6.jpg';
import dish7 from './deserts/dish7.jpg';
import dish8 from './deserts/dish8.jpg';
import dish9 from './deserts/dish9.jpg';
import dish10 from './deserts/dish10.jpg';

import removeContent from './removeContent.js';
import createHome from './homeCreator.js';
import createAboutUs from './aboutUsCreator.js';





const dishesInfo = [
    {
        index: 0,
        title: 'Bageli di Frutta',
        description: 'Bagel with cream cheese topped with various fruits (strawberries, raspberries, kiwi slices, dragon fruit, cherries, or dark berries) along with a sprinkle of coconut flakes'
    },
    {
        index: 1,
        title: 'Asparagi Bianchi',
        description: 'White asparagus arranged, blanched, with some shaved parmesan, frisée lettuce and a black truffle'
    },
    {
        index: 2,
        title: 'Benedette al Salmon',
        description: 'A classic Eggs Benedict dish with poached eggs on top of English muffins and smoked salmon, finished with a generous drizzle of hollandaise sauce and a sprinkle of chives'
    },
    {
        index: 3,
        title: 'Crema De Cesi',
        description: 'Bowl of hummus, a creamy dip made from mashed chickpeas blended with tahini, olive oil, lemon juice, salt, and garlic'
    },
    {
        index: 4,
        title: 'Crespeme Classiche',
        description: 'Thin pancakes that can be filled with a variety of ingredients. Golden and slightly crisp on the edges'
    },
    {
        index: 5,
        title: 'Dolce Volcano',
        description: 'Lava cake dusted with powdered sugar, garnished with fresh berries (strawberries, blueberries, raspberries, and red currants)'
    },
    {
        index: 6,
        title: 'Gemelli Rustici',
        description: 'Gemelli tossed with chunks of sausage, mushrooms, and garnished with parsley'
    },
    {
        index: 7,
        title: 'Ravioli di Zucca',
        description: 'Ravioli served with butter, topped with squash, freshly grated Parmesan cheese, and garnished with green leaves'
    },
    {
        index: 8,
        title: 'Straccetti di Pollo Picante',
        description: 'stir-fry with pasta, mixed with sliced chicken, bell peppers, and onions, all garnished with fresh herbs and a sprinkle of chili flakes'
    },
    {
        index: 9,
        title: 'Verde Fresco e Pomodoro',
        description: 'An Omlette with a base of hummus, topped with (cherry tomatoes, avocado or guacamole, green onions, and sugar snap peas)'
    }

];


let dishImages = [dish1, dish2, dish3, dish4, dish5, dish6, dish7, dish8, dish9, dish10];

const innerContainer = document.querySelector('.inner-container');

function createCell(dish) {

    const cellDiv = document.createElement('div');
    cellDiv.classList.add('cell');

    const img = document.createElement('img');
    img.src = dishImages[dish.index];
    img.alt = `Dish ${dish.index + 1}`;
    img.style.objectFit = 'cover';
    img.style.width = '100%';
    img.style.height = '100%';

    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');

    const titleSpan = document.createElement('span');
    titleSpan.classList.add('title');
    titleSpan.textContent = dish.title;

    const descriptionP = document.createElement('p');
    descriptionP.textContent = dish.description;

    overlayDiv.appendChild(titleSpan);
    overlayDiv.appendChild(descriptionP);
    cellDiv.appendChild(img);
    cellDiv.appendChild(overlayDiv);

    return cellDiv;
}

export default function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    innerContainer.appendChild(menu);

    dishesInfo.forEach((dish) => {
        const cellDiv = createCell(dish);
        menu.appendChild(cellDiv);
    });

    const homeBtn = document.querySelector('.homeBtn');
    homeBtn.addEventListener('click', () => {
        removeContent();
        createHome();
    });

    const aboutBtn = document.querySelector('.aboutBtn');
    aboutBtn.addEventListener('click', () => {
        removeContent();
        createAboutUs();
    });
}
