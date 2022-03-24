export const appendNavBtn = () => {
    const navBtn = `
      <div class="navBtn">
        <button class="previous">Previous</button>
        <button class="next" disabled>Next</button>
      </div>
      `;
    content.insertAdjacentHTML("beforeend", navBtn);
  };