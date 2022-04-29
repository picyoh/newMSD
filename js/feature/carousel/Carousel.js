// order carousel components
export const orderCarousel = () => {
  // check center
  const activeResult = document.querySelector(".activeResult");
  // set base order
  if (activeResult === null) {
    // allocate results
    const result0 = document.querySelector("#result0");
    result0.classList.add("activeResult");
    const result1 = document.querySelector("#result1");
    result1.classList.add("right");
    const result2 = document.querySelector("#result2");
    result2.classList.add("backRight");
    const result3 = document.querySelector("#result3");
    result3.classList.add("back");
    const result4 = document.querySelector("#result4");
    result4.classList.add("backLeft");
    const result5 = document.querySelector("#result5");
    result5.classList.add("left");
    // TODO: add up mouvement
    // TODO: add down mouvement
  }
};

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
