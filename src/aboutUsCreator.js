import createHome from './homeCreator.js';
import createMenu from './menuCreator.js';
import removeContent from './removeContent.js';

const welcomeMessage = `Ziggie's Cuisine didn't just come into existence overnight; it was the culmination of generations of culinary passion and cross-cultural exploration. The story begins with the Ziggiano family, Italian immigrants who brought with them a deep love for their homeland's traditional flavors when they arrived in America. In the early 20th century, Giovanni Ziggiano arrived in New York City from a small village in Sicily. With him, he carried recipes passed down through generations, each dish holding memories of family gatherings and celebrations. Determined to share the tastes of his heritage with his new home, Giovanni opened a modest trattoria in Little Italy. The trattoria thrived, becoming a beloved neighborhood institution. Giovanni's son, Marco, inherited his father's culinary skills and adventurous spirit. Inspired by the diverse culinary landscape of America, Marco began to experiment, blending traditional Italian recipes with American ingredients and techniques. As the years passed, Marco's experiments evolved into a unique fusion of Italian and American cuisine. His dishes attracted a diverse clientele, drawn not only by the delicious food but also by the warm, welcoming atmosphere of the trattoria. When Marco's daughter, Isabella, inherited the family business, she sought to honor her father's legacy while also putting her own stamp on the restaurant. She rebranded it as "Ziggie's Cuisine," a nod to her family's heritage and their fusion of Italian and American flavors. Under Isabella's guidance, Ziggie's Cuisine flourished, expanding beyond its humble beginnings to become a destination for food lovers from far and wide. The menu featured handcrafted pastas infused with bold American ingredients, alongside classic Italian dishes with a modern twist. Ziggie's became more than just a restaurant; it became a place where people could come together to celebrate life's moments, big and small. Whether it was a romantic date night, a family reunion, or a casual meal with friends, patrons knew they could always count on Ziggie's for delicious food and a warm welcome. And so, the legacy of Ziggie's Cuisine continues, a testament to the enduring power of food to bring people together across cultures and generations. With every bite, patrons experience the rich tapestry of Italy and America, savoring the flavors of tradition and innovation in equal measure. Buon Appetito and Welcome Home!`;

const innerContainer = document.querySelector('.inner-container');

const menuBtn = document.querySelector('.menuBtn');
const homeBtn = document.querySelector('.homeBtn');

export default function createAboutUs(){
    const aboutUs = document.createElement('div');
    aboutUs.id = 'welcome';

    const message = document.createElement('p');
    message.textContent = welcomeMessage;

    aboutUs.appendChild(message);

    innerContainer.appendChild(aboutUs);

    menuBtn.addEventListener('click', () => {
        removeContent();
        createMenu();
    });

    homeBtn.addEventListener('click', () => {
        removeContent();
        createHome();
    });


}