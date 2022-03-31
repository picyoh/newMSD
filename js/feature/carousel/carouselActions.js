import { sortResults } from "../../services/sortResults.js";

export const setCarousel = () => {
    // sort result data
    const results = sortResults(resultDatas, userChoices);
    // hide navigation
    document.querySelector(".cursorContainer").classList.add("hidden");
    document.querySelector(".navBtn").classList.add("hidden");
    // set carousel
    // const carousel = new Carousel(results);
    carousel.appendResults();
    // carousel.moveLeft();
}