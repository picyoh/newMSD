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
    <div class="resultInfos">
    </div>
  </div>
`;
  content.insertAdjacentHTML("beforeend", carousel);
  carouselContent(resultDatas);
  manageInfos(resultDatas);
};

export const carouselContent = (resultDatas) => {
  // Init variables
  let name;
  let score;
  // Fill carousel
  const carouselContainer = document.querySelector(".carouselContainer");
  const carouselContent = resultDatas
    .map((result, index) => {
      return `
        <div id="position${index}" class="results result${index}">
          <div class="imgContainer">
            <a class='resultLink' src='${result.data.affLink}'>
              <img src='${result.data.imgSrc}' />
            </a>
          </div>
        </div>
        `;
    })
    .join("");
  carouselContainer.insertAdjacentHTML("afterbegin", carouselContent);
};

export const manageInfos = (resultDatas) => {
   // Manage Result infos
   const resultInfos = document.querySelector('.resultInfos');
   const infos = resultDatas.map((result,index) => {
    // let name = result.name;
    let score = result.score;
    return `
    <div class="info${index} infos ${(index === 0) ? `visible` : ''}">
      <p class="resultScore">${score}%</p>
    </div>
    `;
   }).join("");
   resultInfos.insertAdjacentHTML('afterbegin', infos);
}
