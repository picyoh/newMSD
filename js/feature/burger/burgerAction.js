export const handleBurger = () => {
  document.querySelector("#menu-burger").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.querySelector(".menu-container").classList.remove("hidden");
    setCurve();
    transformBurger();
    handleClose();
  });
};

export const handleClose = () => {
    document.querySelector('#menu-burger').addEventListener('click', (e)=> {
        e.preventDefault();
        e.stopPropagation();
        document.querySelector(".menu-container").classList.add("hidden");
        handleBurger();
    })
}

const transformBurger = () => {
  // document.querySelector('burger-icon')
}

const setCurve = () => {
  let i = 0;
  document.querySelector('.up-header').classList.add('flatten');
  document.querySelector('footer').classList.add('flatten');
  const elements = document.querySelectorAll('.menu-element');
  let eLength = elements.length -1;
  
  console.log(eLength);

  elements.forEach((e) => {
    if(e.classList.contains("hidden")){
     eLength--;
    }else {
      if(i == 0){
        e.classList.add("top-curve");
      }
      if (i == eLength){
        e.classList.add("bottom-curve");
      }
      i++;
    }
  })
}