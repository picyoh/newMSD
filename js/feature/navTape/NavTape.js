import { moveCursor } from "./navTapeActions.js";

export const appendNavTape = (questionDatas) => {
  const cursor = `
        <div class="navTape">
          <button class="previous" disabled><i class="fa-solid fa-angle-left"></i></button>
          <div class="cursorContainer">
        ${questionDatas
          .map((question, index) => {
            return `
            <span id="cursor${index}" class="cursor"></span>
            `;
          })
          .join("")}
            </div>
          <button class="next" disabled><i class="fa-solid fa-angle-right"></i></button>
        </div>
        `;
  content.insertAdjacentHTML("afterbegin", cursor);
  moveCursor(0);
};
