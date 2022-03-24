export const appendCursor = (questionDatas) => {
  const cursor = `
        <div class="cursorContainer">
        ${questionDatas
          .map((question, index) => {
            if (index === 0) {
              return `<span class="cursor ${index} active"></span>`;
            }
            return `
            <span class="cursor ${index}"></span>
            `;
          })
          .join("")}
        </div>
        `;
  main.insertAdjacentHTML("beforeend", cursor);
};

export const moveCursor = () => {
  const active = document.querySelector(".active");
  console.log(active);
  // TODO: add css to cursor
};
