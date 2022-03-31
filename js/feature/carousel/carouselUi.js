export const appendResults = (resultDatas) => {
    console.log(resultDatas)
    const carousel = `
          <div class="carousel">
            <h2>Resultats</h2>
            <div class="carouselContainer">
          ${resultDatas
            .map((result, index) => {
              return `
                  <div id=result${index} class="results">
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
} 
    