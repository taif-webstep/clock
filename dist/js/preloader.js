window.addEventListener("load", () => {
    const preload = document.querySelector(".preloader");

    function finish() {
        preload.classList.add("preloader-finished");
    }
    setTimeout(finish, 4000);
});