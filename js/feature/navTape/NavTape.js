import { moveCursor } from "./navTapeActions.js";

export const appendTape = (questionDatas) => {
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
        <div class="navBtn">
          <button class="previous" disabled>Previous</button>
          <button class="next" disabled>Next</button>
        </div>
        `;
  content.insertAdjacentHTML("afterbegin", cursor);
  moveCursor(0);
};