import throttle from "lodash/throttle";

class RevealOnScroll {
  constructor() {
    this.itemsToReveal = document.querySelectorAll(".feature-item");
    this.hideInitially();
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
    this.events();
  }

  events() {
    window.addEventListener("scroll", this.scrollThrottle);
  }

  calcCaller() {
    // console.log("Scroll function ran");
    this.itemsToReveal.forEach((element) => {
      if (element.isRevealed == false) {
        this.calculateIfScrolledTo(element);
      }
    });
  }

  calculateIfScrolledTo(element) {
    // console.log("Element was calcualted");
    let scrollPercent = (element.getBoundingClientRect().y / window.innerHeight) * 100;
    if (scrollPercent < 75) {
      element.classList.add("reveal-item--is-visible");
      element.isRevealed = true;
      if (element.isLastItem) {
        window.removeEventListener("scroll", this.scrollThrottle);
      }
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach((element) => {
      element.classList.add("reveal-item");
      element.isRevealed = false;
    });
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
  }
}

export default RevealOnScroll;
