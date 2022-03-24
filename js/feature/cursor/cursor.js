export const appendCursor = (questionDatas) => {
  const cursor = `
        <div class="cursorContainer">
        ${questionDatas
          .map((question, index) => {
            if (index === 0) {
              return `<span id="cursor${index}" class="cursor"></span>`;
            }
            return `
            <span id="cursor${index}" class="cursor"></span>
            `;
          })
          .join("")}
        </div>
        `;
  questions.insertAdjacentHTML("beforebegin", cursor);
  moveCursor(0);
};

export const moveCursor = (currentPos) => {
  const pos = "#cursor" + currentPos;
  const currentCursor = document.querySelector(pos);
  currentCursor.className = "cursor active";
  // TODO:reculer curseur
};
