class MobileMenu {

    constructor() {
        this.mobileMenu = document.querySelector(".site-header__menu-icon");

        this.events();
    }

    events() {

        this.mobileMenu.addEventListener("click", () => this.toggleMenuItem());
        
    }

    toggleMenuItem() {
        document.querySelector(".site-header__menu-content").classList.toggle("site-header__menu-content-is-visible");
    }

}

export default MobileMenu;