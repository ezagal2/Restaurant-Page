import createMenu from './menuCreator.js';
import removeContent from './removeContent.js';
import createAboutUs from './aboutUsCreator.js';

const welcomeMessage = "Welcome to Ziggie's Cuisine, where Italy meets America in every bite. Experience traditional flavors with a twist, from handcrafted pastas to bold American dishes. Buon Appetito and Welcome Home!";

const innerContainer = document.querySelector('.inner-container');

const menuBtn = document.querySelector('.menuBtn');
const aboutUsBtn = document.querySelector('.aboutBtn');

export default function createHome(){
    const homeDiv = document.createElement('div');
    homeDiv.id = 'welcome';

    const welcomeP = document.createElement('p');
    welcomeP.textContent = welcomeMessage;

    homeDiv.appendChild(welcomeP);

    const seeMenuBtn = document.createElement('button');
    seeMenuBtn.id = 'call-to-action';
    seeMenuBtn.textContent = 'See the Menu';

    innerContainer.appendChild(homeDiv);
    innerContainer.appendChild(seeMenuBtn);

    seeMenuBtn.addEventListener('click', () => {
        removeContent();
        createMenu();
    });

    menuBtn.addEventListener('click', () => {
        removeContent();
        createMenu();
    });

    aboutUsBtn.addEventListener('click', () => {
        removeContent();
        createAboutUs();
    });


}