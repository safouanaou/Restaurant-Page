import restoImg from './assets/resto.jpg';

export function initialPageLoad(){
    const contentDiv = document.getElementById('content');

    contentDiv.replaceChildren();

    const heading = document.createElement('h1');
    heading.textContent = "Fibonacci Restaurant";
    heading.classList.add('title');
    contentDiv.appendChild(heading);

    const image = document.createElement('img');
    image.src = restoImg;
    image.classList.add('image');
    contentDiv.appendChild(image);

    const parOne = document.createElement('p');
    parOne.textContent = "mamamia";
    parOne.classList.add('parOne');
    contentDiv.appendChild(parOne);

}