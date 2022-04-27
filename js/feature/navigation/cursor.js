export const appendCursor = (questionDatas) => {
  const cursor = `
        <div class="cursorContainer">
        ${questionDatas
          .map((question, index) => {
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

export const moveCursor = (index) => {
  const pos = "#cursor" + index;
  const currentCursor = document.querySelector(pos).classList.add("active")
};

export const removeCursor = (index) => {
  const pos = "#cursor" + index;
  const currentCursor = document.querySelector(pos).classList.remove("active")
};
