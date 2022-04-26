export const appendResults = (resultDatas) => {
  console.log(resultDatas);
  const carousel = `
          <div class="carousel">
            <h2>Resultats</h2>
            <div class="carouselContainer">
          ${resultDatas
            .map((result, index) => {
              return `
              ${
                (index < 2) || (index === 5)
                  ? `<div id=result${index} class="results">`
                  : `<div id=result${index} class="results hidden">`
              }
                    <img src= ${result.data.src} />
                    <p>${result.score}%</p>
                  </div>
                  `;
            })
            .join("")}
            </div>
          </div>
            `;
  content.insertAdjacentHTML("beforeend", carousel);
  orderCarousel();
};

export const carouselLeft = () => {};

export const carouselRight = () => {};

export const orderCarousel = () => {
  // check center
  const carouselCenter = document.querySelector(".carouselCenter");
  // set base order
  if (carouselCenter === null) {
    // TODO: calc :before height/% and add it to style 
    // left
    const result5 = document.querySelector("#result5");
    result5.classList.add("carouselLeft");
    // center
    const result0 = document.querySelector("#result0");
    result0.classList.add("carouselCenter");
    // right
    const result1 = document.querySelector("#result1");
    result1.classList.add("carouselRight");
  }
};
