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
          <div class="imgContainer">
            <img src= ${result.data.src} />
          </div>
          <p>${result.score}%</p>
        </div>
        `;
    })
    .join("");
  carouselContainer.insertAdjacentHTML("afterbegin", carouselContent);
};
// % matching div
{/* <div class="matchChart" style="height:${result.score}%"></div> */}