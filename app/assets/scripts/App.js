import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import ClientArea from "./modules/ClientArea";

new MobileMenu();
new StickyHeader();

new RevealOnScroll(document.querySelectorAll(".feature-item"), 80);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 90);

new ClientArea();

let modal;

document.querySelectorAll(".open-modal").forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ "./modules/Modal")
        .then((x) => {
          modal = new x.default();

          // allow 20ms for x, i.e. the Modal.js to be loaded
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch(() => {
          console.log("There as a problem when loading modal.");
        });
    } else {
      modal.openTheModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
