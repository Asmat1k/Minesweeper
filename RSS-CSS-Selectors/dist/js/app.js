(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            const webP = new Image;
            webP.onload = webP.onerror = () => {
                callback(webP.height === 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((support => {
            const className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    function menuInit() {
        if (document.querySelector(".nav-burger")) document.addEventListener("click", (event => {
            if (event.target.closest(".nav-burger")) {
                document.documentElement.classList.toggle("menu-open");
                document.querySelector(".nav__header_menu").classList.toggle("menu-open");
            }
        }));
    }
    isWebp();
    menuInit();
})();