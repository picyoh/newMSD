// order carousel components
export const orderCarousel = () => {
  // check center
  const activeResult = document.querySelector(".activeResult");
  // set base order
  if (activeResult === null) {
    // trigger first result
    const result0 = document.querySelector("#result0");
    result0.classList.add("activeResult");
    // TODO: add up mouvement
    // TODO: add down mouvement
  }
};

// TODO: 
// append Carousel
export const appendResults = (resultDatas) => {
  console.log(resultDatas);
  const carousel = `
          <div class="carousel">
            <h2>Resultats</h2>
            <div class="carouselContainer">
          ${resultDatas
            .map((result, index) => {
              return `
              <div id=result${index} class="results">
                <div class="imgContainer">
                  <img src= ${result.data.src} />
                </div>
                <p>${result.score}%</p>
                <div class="matchChart" style="height:${result.score}%"></div>
              </div>
                  `;
            })
            .join("")}
            </div>
          </div>
            `;
  content.insertAdjacentHTML("beforeend", carousel);
  // orderCarousel();
};

export const carouselLeft = () => {};

export const carouselRight = () => {};
