import couscousImg from './assets/couscous.jpeg';
import tajineImg from './assets/tajine-au-poulet.jpeg';
import chickenImg from './assets/moroccan-chicken.jpg';


export function menuPage(){
    const contentDiv = document.getElementById('content');

    contentDiv.replaceChildren();

    const firstMealName = document.createElement('h1');
    firstMealName.textContent = 'couscous';
    firstMealName.classList.add('couscous');

    const firstMealImage = document.createElement('img');
    firstMealImage.src = couscousImg;
    firstMealImage.classList.add('couscousImg');

    const firstMealDescription = document.createElement('p');
    firstMealDescription.textContent = 'couscous is a traditional moroccan food made with grains of durum wheat semolina with along with other ingredients such as chicken and vegetables';
    firstMealDescription.classList.add('couscousDescription');

    contentDiv.appendChild(firstMealName)
    contentDiv.appendChild(firstMealImage)
    contentDiv.appendChild(firstMealDescription)


    
    const secondMealName = document.createElement('h1');
    secondMealName.textContent = 'tajine';
    secondMealName.classList.add('tajine');

    const secondMealImage = document.createElement('img');
    secondMealImage.src = tajineImg;
    secondMealImage.classList.add('tajineImg');

    const secondMealDescription = document.createElement('p');
    secondMealDescription.textContent = 'tajine is a traditional moroccan food made with grains of durum wheat semolina with along with other ingredients such as chicken and vegetables';
    secondMealDescription.classList.add('tajineDescription');

    contentDiv.appendChild(secondMealName)
    contentDiv.appendChild(secondMealImage)
    contentDiv.appendChild(secondMealDescription)



    
    const thirdMealName = document.createElement('h1');
    thirdMealName.textContent = 'chicken';
    thirdMealName.classList.add('chicken');

    const thirdMealImage = document.createElement('img');
    thirdMealImage.src = chickenImg;
    thirdMealImage.classList.add('chickenImg');

    const thirdMealDescription = document.createElement('p');
    thirdMealDescription.textContent = 'chicken is a traditional moroccan food made with grains of durum wheat semolina with along with other ingredients such as chicken and vegetables';
    thirdMealDescription.classList.add('chickenDescription');

    contentDiv.appendChild(thirdMealName)
    contentDiv.appendChild(thirdMealImage)
    contentDiv.appendChild(thirdMealDescription)




}