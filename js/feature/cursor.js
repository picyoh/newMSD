// TODO: implementer Cursor
class Cursor {
  constructor(position, questionDatas) {
    this.position = position;
    this.questionDatas = questionDatas;
  }

  appendCursor() {
    const cursor = `
        <div class="cursorContainer">
        ${this.questionDatas.map((question, index)=> {
            return `
            <span class="cursor ${index+1}"></span>
            `;
        }).join("")}
        </div>
        `;
        main.insertAdjacentHTML("beforeend", cursor)
  }
  moveCursor() {
      
  }
}

export default Cursor;
