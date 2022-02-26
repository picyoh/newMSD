class Carousel {
  constructor(results) {
    this.results = results;
  }

  appendResults() {
    const carousel = `
      <section class="carousel">
        <h2>Resultats</h2>
      ${this.results
        .map((result, index) => {
          if (index === 0) {
            return `
              <div id="top" class="slideContainer">
                <img src= ${result.data.src} />
                <p>${result.score}%</p>
              </div>
              `;
          }
          if (index === 1) {
            return `
              <div id="right" class="slideContainer">
                <img src= ${result.data.src} />
                <p>${result.score}%</p>
              </div>
              `;
          }
          if (index === 5) {
            return `
              <div id="left" class="slideContainer">
                <img src= ${result.data.src} />
                <p>${result.score}%</p>
              </div>
              `;
          }
        })
        .join("")}
      </section>
        `;
    main.insertAdjacentHTML("beforeend", carousel);
  }

  rotateLeft() {}

  rotateRight() {}
}

export default Carousel;
