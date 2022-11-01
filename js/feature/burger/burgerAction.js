export const handleBurger = () => {
  document.querySelector("#menu-burger").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.querySelector(".menu-container").classList.remove("hidden");
    transformBurger();
    handleClose();
  });
};

const transformBurger = () => {
    // document.querySelector('burger-icon')
}

export const handleClose = () => {
    document.querySelector('#menu-burger').addEventListener('click', (e)=> {
        e.preventDefault();
        e.stopPropagation();
        document.querySelector(".menu-container").classList.add("hidden");
        handleBurger();
    })
}