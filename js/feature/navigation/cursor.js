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
  content.insertAdjacentHTML("afterbegin", cursor);
  moveCursor(0);
};

export const moveCursor = (currentPos) => {
  const pos = "#cursor" + currentPos;
  const currentCursor = document.querySelector(pos).classList.add('active')
};

export const removeCursor = (currentPos) => {
  const pos = "#cursor" + currentPos - 1;
  const currentCursor = document.querySelector(pos).classList.remove('active')
};
