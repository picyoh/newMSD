// Carousel structure
export const appendResults = (resultDatas) => {
  const carousel = `
  <div class="carousel">
    <div class="carouselContent">
      <button id="carouselPrev" class="previous"><i class="fa-solid fa-angle-left"></i></button>
      <div class="carouselContainer">
      
      </div>
      <button id="carouselNext" class="next"><i class="fa-solid fa-angle-right"></i></button>
      </div>
                `;
  content.insertAdjacentHTML("beforeend", carousel);
  carouselContent(resultDatas);
};

export const carouselContent = (resultDatas) => {
  const carouselContainer = document.querySelector(".carouselContainer");
  const carouselContent = resultDatas
    .map((result, index) => {
      return `
        <div id=result${index} class="results">
        <p class="hidden" >${result.score}%</p>
          <div class="imgContainer">
            <img src= ${result.data.src} />
          </div>
        </div>
        `;
    })
    .join("");
  carouselContainer.insertAdjacentHTML("afterbegin", carouselContent);
};
