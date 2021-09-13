import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

new StickyHeader();

new RevealOnScroll(document.querySelectorAll(".feature-item"), 80);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 90);

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
