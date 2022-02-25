class Carousel {
  constructor(results) {
    this.results = results;
  }

  appendResults() {
    
    const carousel = `
    <section class="carousel">
      <h2>Resultats</h2>
      ${this.results
        .map((result) => {
          `<div class="slideContainer">
            <img src= ${result.src} />
            <p>${result.score}%</p>
            </div>`;
        })
        .join("")}
      </section>
        `;
    main.insertAdjacentHTML("beforeend", carousel);
  }

  rotateLeft() {}

  rotateRight() {}
}

export default Carousel
