import { content, cookieWarning } from "./cguContent.js";

export const fillCGU = () => {
    const article = document.querySelector('#cguArticle');
    article.insertAdjacentHTML('beforeend', content);
}

export const insertPopUp = () => {
    if(sessionStorage.getItem('firstConnexion') === null){
        // Get and Blur the page
        const page = document.querySelector('article');
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');
        header.classList.add("blur");
        page.classList.add("blur");
        footer.classList.add("blur");
        // Set a popUp structure
        const popUp =
            `
            <section id="popUp">  
            <div id="popUpContainer">
                <div class="cookieMessage">
                  <a href="#" class="close">X</a>
                </div>
                <div class="cguDropdown">
                  <button id="dropdownButton">Conditions d'utilisations<span class="dropdownArrow"></span></button>
                  <div class="dropdownContent hidden"></div>
                </div>
                <div class="popUpButtons">
                    <button class="accept">Accepter</button>
                    <button class="decline">Décliner</button>
                </div>
            </div>
          </section>
        `;
        // Append popUp
        page.insertAdjacentHTML('afterend', popUp);
        const message = document.querySelector('.cookieMessage');
        message.insertAdjacentHTML('beforeend', cookieWarning);
        const dropdown = document.querySelector('.dropdownContent');
        dropdown.insertAdjacentHTML('beforeend', content);
        listeningPopUp();
    }
}

const listeningPopUp = () => {
    const accept = document.querySelector('.accept');
    const decline = document.querySelector('.decline');
    const dropdown = document.querySelector('#dropdownButton');
    const close = document.querySelector('.close');

    accept.addEventListener('click', (e) => {
        closePopUp()
        sessionStorage.setItem('firstConnexion', false);
    });

    // TODO: action decline

    decline.addEventListener('click', (e) => {
        closePopUp()
        sessionStorage.setItem('firstConnexion', false);
    });

    dropdown.addEventListener('click', (e)=>{
        const content = document.querySelector('.dropdownContent');
        if(content.classList.contains('hidden')){
            content.classList.remove('hidden');
        }else {
            content.classList.add('hidden');
        }
    });

    close.addEventListener('click', (e) => {
        e.preventDefault();
        closePopUp()
        sessionStorage.setItem('firstConnexion', false);
    });
}

const closePopUp = () => {
    const body = document.querySelector('body');
    const popup = document.querySelector('#popUp');
    body.removeChild(popup);
    // Get and Blur the page
    const page = document.querySelector('article');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    header.classList.remove("blur");
    page.classList.remove("blur");
    footer.classList.remove("blur");
}