class Carousel {
  constructor(results) {
    this.results = results;
  }

  appendResults() {
    const position = (index) => {
      switch (index) {
        case 0:
          return {id: "top", class:""};
        case 1:
          return {id: "topRight", class:""};
        case 2:
          return {id:"botRight", class:"hidden"};
        case 3:
          return {id:"bottom", class:"hidden"};
        case 4:
          return {id:"botLeft", class:"hidden"};
        case 5:
          return {id:"topLeft", class:""};
      }
    };

    const carousel = `
      <section class="carousel">
        <h2>Resultats</h2>
        <div class="carouselContainer">
      ${this.results
        .map((result, index) => {
          return `
              <div id=${position(index).id} class="slideContainer ${position(index).class}">
                <img src= ${result.data.src} />
                <p>${result.score}%</p>
              </div>
              `;
        })
        .join("")}
        </div>
      </section>
        `;
    main.insertAdjacentHTML("beforeend", carousel);
  }

  moveLeft() {
    const topLeft = document.querySelector('#topLeft');
    topLeft.addEventListener('click', (e)=>{

      const carouselContainer = document.querySelector('.carouselContainer');

      const top = document.querySelector('#top');
      const topRight = document.querySelector('#topRight');
      const botRight = document.querySelector('#botRight');
    })
  }

  moveRight() {}
}

export default Carousel;
